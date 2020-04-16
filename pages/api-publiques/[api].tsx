import React, { useState, useRef, useEffect } from 'react';
import { NextPage } from 'next';
import { throttle } from 'lodash';

import { getAPI, getAllServices, IService, IApi } from '../../model';
import withErrors from '../../components/hoc/with-errors';
import Page from '../../layouts';

import {
  PageHeader,
  Menu,
  Access,
  Support,
  Monitoring,
  RateLimiting,
  Partners,
  TechnicalDocumentation,
  ApiRelatedServices,
  Content,
  Thumbnails,
} from '../../components/api';
import { HEADER_PAGE } from '../../components/header';

import { getWindowHash, isElementVisible } from '../../utils';
import constants from '../../constants';

const DEFAULT_LOGO = process.env.DEFAULT_LOGO || 'logo-beta-gouv.svg';

interface IProps {
  api: IApi;
  services: IService[];
}

const API: NextPage<IProps> = ({ api, services = null }) => {
  const {
    title,
    tagline,
    logo,
    stat,
    owner,
    uptime,
    last_update,
    contact_link,
    doc_tech_link,
    doc_tech_external,
    doc_tech_description,
    access_link,
    access_description,
    access_condition,
    monitoring_link,
    monitoring_description,
    rate_limiting_description,
    rate_limiting_resume,
    body,
    is_open,
    clients,
    partners,
  } = api;

  const [menuItem, setMenuItem] = useState('api-description');

  const contentContainer = useRef(null);

  const getVisibleAnchor = () => {
    if (!contentContainer || !contentContainer.current) {
      return;
    }

    const sectionCollection = contentContainer.current.children;

    for (let i = 0; i < sectionCollection.length; i++) {
      const elem = sectionCollection[i];
      if (isElementVisible(elem, constants.layout.HEADER_HEIGHT)) {
        return elem.children[0].id;
      }
    }
  };

  const setVisibleAnchor = (anchor, smooth = false) => {
    setMenuItem(anchor);

    const anchorElem = document.getElementById(anchor);

    if (!anchorElem) {
      return;
    }
    anchorElem.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentVisibleAnchor = getVisibleAnchor();
      if (currentVisibleAnchor !== getWindowHash()) {
        setMenuItem(currentVisibleAnchor);
        window.history.replaceState(
          undefined,
          undefined,
          `#${currentVisibleAnchor}`
        );
      }
      // approx 8 frames
    }, 16 * 8);

    // scroll if any anchor in url - only applies on refresh
    const hash = getWindowHash();

    if (hash) {
      setVisibleAnchor(hash, true);
    }

    // add scrollListeners
    window.addEventListener('scroll', handleScroll);

    return () => {
      // clean listeners
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Page
      headerKey={HEADER_PAGE.APIS}
      title={title}
      description={`${title} est une des APIs du service public. ${tagline}`}
    >
      <PageHeader
        title={title}
        logo={logo || DEFAULT_LOGO}
        tagline={tagline}
        stat={stat}
      />

      <Thumbnails
        is_open={is_open}
        uptime={uptime}
        lastUpdate={last_update}
        owner={owner}
        rate_limiting={rate_limiting_resume}
      />

      <div id="description" className="content-container">
        <div className="ui equal width grid padded">
          <div className="four wide column computer only">
            <div className="sticky-column">
              <Menu selectedItem={menuItem} select={setVisibleAnchor} />
            </div>
          </div>
          <div className="column" ref={contentContainer}>
            <Content content={body} />

            <Access
              is_open={is_open}
              link={access_link}
              description={access_description}
              condition={access_condition}
              clients={clients}
            />

            <Support link={contact_link} />

            <Monitoring
              description={monitoring_description}
              link={monitoring_link}
            />

            <RateLimiting description={rate_limiting_description} />

            <Partners partners={partners} />

            <TechnicalDocumentation
              description={doc_tech_description}
              link={doc_tech_link}
              external={doc_tech_external}
            />

            <ApiRelatedServices services={services} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .sticky-column {
          position: sticky;
          overflow: hidden;
          top: ${parseInt(constants.layout.HEADER_HEIGHT, 10) + 20}px;
          padding-bottom: 15px;
        }
      `}</style>
    </Page>
  );
};

API.getInitialProps = async ({ query }) => {
  const api = await getAPI(query.api);
  const services = await getAllServices();

  const apiServices = services.filter(service => {
    return service.api.indexOf(api.title) > -1;
  });

  return { api, services: apiServices };
};

export default withErrors(API);
