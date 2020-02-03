import React from "react";
import PropTypes from "prop-types";
import getConfig from "next/config";

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
  const {
    title,
    tagline,
    logo,
    stat,
    owner,
    uptime,
    last_update,
    score: { detail },
    external_site,
    content,
    clients,
    is_open,
    access_condition,
    access_description,
    access_link,
    rate_limiting_resume,
    rate_limiting_description,
    partners
  } = api;

  const { contact, doc_tech, monitoring } = detail;

  const { link: contact_link, description: contact_description } =
    contact || {};

  const {
    link: doc_tech_link,
    external: doc_tech_external,
    description: doc_tech_description
  } = doc_tech || {};

  const { link: monitoring_link, description: monitoring_description } =
    monitoring || {};

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
        is_open={is_open}
        uptime={uptime}
        lastUpdate={last_update}
        owner={owner}
        rate_limiting={rate_limiting_resume}
      />

      <Menu detail={detail} />

      <div id="description" className="ui container">
        <Content content={content} />

        <Access
          is_open={is_open}
          condition={access_condition}
          description={access_description}
          link={access_link}
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

        <RateLimiting description={rate_limiting_description} />

        <Partners partners={partners} />

        <TechnicalDocumentation
          doc_tech_description={doc_tech_description}
          doc_tech_link={doc_tech_link}
          doc_tech_external={doc_tech_external}
        />

        <Services services={services} />
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
        monitoring: PropTypes.shape({
          link: PropTypes.string,
          description: PropTypes.string
        })
      }).isRequired
    }).isRequired,
    content: PropTypes.string.isRequired,
    clients: PropTypes.array,
    is_open: PropTypes.bool.isRequired,
    access_condition: PropTypes.string,
    access_description: PropTypes.string,
    access_link: PropTypes.string,
    partners: PropTypes.array,
    rate_limiting_resume: PropTypes.string,
    rate_limiting_description: PropTypes.string
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
