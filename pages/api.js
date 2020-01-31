import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import getConfig from "next/config";
import Router from 'next/router'

import { getAPI, getService } from "../utils/api";

import withErrors from "../components/hoc/with-errors";

import Page from "../layouts/page";

import Header from "../components/api/header";
import Menu from "../components/api/menu";

import Access from "../components/api/access";
import Support from "../components/api/support";
import Monitoring from "../components/api/monitoring";
import RateLimiting from "../components/api/rate-limiting";
import Partners from "../components/api/partners";
import TechnicalDocumentation from "../components/api/technical-documentation";
import Services from "../components/api/services";
import Content from "../components/api/content";
import Thumbnails from "../components/api/thumbnails";

const { publicRuntimeConfig } = getConfig();
const DEFAULT_LOGO = publicRuntimeConfig.DEFAULT_LOGO || "logo-beta-gouv.svg";

const API = ({ api, services }) => {
  const [selected, setSelected] = useState();

  const {
    title,
    tagline,
    logo,
    stat,
    owner,
    uptime,
    score: { detail },
    external_site,
    content,
    clients,
    contract,
    partners
  } = api;

  const { contact, doc_tech, access, monitoring, rate_limiting } = detail;

  const { link: contact_link, description: contact_description } =
    contact || {};

  const {
    link: doc_tech_link,
    external: doc_tech_external,
    description: doc_tech_description
  } = doc_tech || {};

  const {
    is_open: access_open,
    link: access_link,
    description: access_description
  } = access || {};

  const { link: monitoring_link, description: monitoring_description } =
    monitoring || {};

  const {
    description: rate_limiting_description,
    resume: rate_limiting_resume
  } = rate_limiting || {};

    const handleHashChange = () => {
      const { hash } = window.location;

      if (hash) {
        const selected = hash.substr(1);
        setSelected(selected);
      }
    };

    useEffect(() => {
      handleHashChange();
      Router.events.on("hashChangeComplete", handleHashChange);
      return () => {
        Router.events.off("hashChangeComplete", handleHashChange);
      };
    }, []);

  return (
    <Page>
      <Header
        title={title}
        logo={logo || DEFAULT_LOGO}
        tagline={tagline}
        stat={stat}
        external_site={external_site}
        access_link={access_link}
        doc_tech_link={doc_tech_link}
        doc_tech_external={doc_tech_external}
      />

      <Thumbnails
        is_open={access_open}
        uptime={uptime}
        owner={owner}
        rate_limiting={rate_limiting_resume}
      />

      <div id="description" className="ui container">
        <div className="ui equal width grid padded">
          <div className="four wide column computer only">
            <Menu detail={detail} selected={selected} />
          </div>
          <div className="column">
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

            <Partners partners={partners} />

            <TechnicalDocumentation
              doc_tech_description={doc_tech_description}
              doc_tech_link={doc_tech_link}
              doc_tech_external={doc_tech_external}
            />

            <RateLimiting
              rate_limiting_description={rate_limiting_description}
            />

            <Services services={services} />
          </div>
        </div>
      </div>
    </Page>
  );
};

API.defaultProps = {
  services: null
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
      lastXdays: PropTypes.number
    }),
    score: PropTypes.shape({
      detail: PropTypes.shape({
        contact: PropTypes.shape({
          link: PropTypes.string,
          description: PropTypes.string
        }),
        doc_tech: PropTypes.shape({
          link: PropTypes.string,
          external: PropTypes.string,
          description: PropTypes.string
        }),
        access: PropTypes.shape({
          is_open: PropTypes.bool,
          link: PropTypes.string,
          description: PropTypes.string
        }),
        monitoring: PropTypes.shape({
          link: PropTypes.string,
          description: PropTypes.string
        }),
        rate_limiting: PropTypes.shape({
          description: PropTypes.string
        })
      }).isRequired
    }).isRequired,
    content: PropTypes.string.isRequired,
    clients: PropTypes.array,
    contract: PropTypes.string,
    partners: PropTypes.array
  }).isRequired
};

API.getInitialProps = async ({ query }) => {
  const api = await getAPI(query.apiId);
  let services = null;

  if (api.services && api.services.length > 0) {
    services = await Promise.all(
      api.services.map(service => getService(service))
    );
  }

  return { api, services };
};

export default withErrors(API);
