import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';

import { isElementVisible } from '../../utils';
import { getAPI, getService } from '../../model/api';
import withErrors from '../../components/hoc/with-errors';
import Page from '../../layouts';
import constants from '../../constants';

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

import { getWindowHash } from '../../utils';
import { HEADER_PAGE } from '../../components/header';

const DEFAULT_LOGO = process.env.DEFAULT_LOGO || 'logo-beta-gouv.svg';

const API = ({ api, services }) => {
  const {
    title,
    tagline,
    logo,
    stat,
    owner,
    uptime,
    last_update,
    score: { detail },
    content,
    clients,
    contract,
    partners,
    is_open,
  } = api;

  const [menuItem, setMenuItem] = useState('api-description');

  const contentContainer = useRef(null);

  const { contact, doc_tech, access, monitoring, rate_limiting } = detail;

  const { link: contact_link, description: contact_description } =
    contact || {};

  const {
    link: doc_tech_link,
    external: doc_tech_external,
    description: doc_tech_description,
  } = doc_tech || {};

  const {
    is_open: access_open,
    link: access_link,
    description: access_description,
  } = access || {};

  const { link: monitoring_link, description: monitoring_description } =
    monitoring || {};

  const {
    description: rate_limiting_description,
    resume: rate_limiting_resume,
  } = rate_limiting || {};

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
              <Menu
                detail={detail}
                selectedItem={menuItem}
                select={setVisibleAnchor}
              />
            </div>
          </div>
          <div className="column" ref={contentContainer}>
            <Content content={content} />

            <Access
              access_open={access_open}
              access_link={access_link}
              access_description={access_description}
              contract={contract}
              clients={clients}
            />

            <Support
              contact_description={contact_description}
              contact_link={contact_link}
            />

            <Monitoring
              monitoring_description={monitoring_description}
              monitoring_link={monitoring_link}
            />

            <RateLimiting
              rate_limiting_description={rate_limiting_description}
            />

            <Partners partners={partners} />

            <TechnicalDocumentation
              doc_tech_description={doc_tech_description}
              doc_tech_link={doc_tech_link}
              doc_tech_external={doc_tech_external}
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

API.defaultProps = {
  services: null,
};

API.propTypes = {
  services: PropTypes.array,
  api: PropTypes.shape({
    logo: PropTypes.string,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    external_site: PropTypes.string.isRequired,
    stat: PropTypes.shape({
      url: PropTypes.string,
      path: PropTypes.array,
      label: PropTypes.string,
      lastXdays: PropTypes.number,
    }),
    score: PropTypes.shape({
      detail: PropTypes.shape({
        contact: PropTypes.shape({
          link: PropTypes.string,
          description: PropTypes.string,
        }),
        doc_tech: PropTypes.shape({
          link: PropTypes.string,
          external: PropTypes.string,
          description: PropTypes.string,
        }),
      }).isRequired,
    }).isRequired,
    content: PropTypes.string.isRequired,
    clients: PropTypes.array,
    is_open: PropTypes.bool.isRequired,
    access_condition: PropTypes.string,
    access_description: PropTypes.string,
    access_link: PropTypes.string,
    partners: PropTypes.array,
    rate_limiting_resume: PropTypes.string,
    rate_limiting_description: PropTypes.string,
    monitoring_link: PropTypes.string,
    monitoring_description: PropTypes.string,
    contact_link: PropTypes.string,
    doc_tech_link: PropTypes.string,
    doc_tech_external: PropTypes.string,
  }).isRequired,
};

API.getInitialProps = async ({ query }) => {
  try {
    const api = await getAPI(query.api);
  } catch (e) {
    console.log(e);
  }

  // let services = null;
  // if (api.services && api.services.length > 0) {
  //   services = await Promise.all(
  //     api.services.map(service => getService(service))
  //   );
  // }

  return { api: [], services: null };
};

export default withErrors(API);
