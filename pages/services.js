import React from 'react';
import PropTypes from 'prop-types';

import withErrors from '../components/hoc/with-errors';

import { getAllServices } from '../utils/api';

import Page from '../layouts/page';

import ServiceCard from '../components/service-card';
import { HEADER_PAGE } from '../components';

const Services = ({ services }) => {
  return (
    <Page
      headerKey={HEADER_PAGE.SERVICES}
      title="Tous nos exemples d'utilisation d’API du service public"
      description="Vous vous demandez comment utiliser une APIs ? Inspirez-vous d’un cas pratique."
    >
      <section id="services" className="content-container main">
        <h2 className="ui divider horizontal">Tous les services</h2>
        <div className="ui three stackable cards">
          {services.map(service => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </section>

      <style jsx>{`
        #services {
          margin-bottom: 2em;
        }
      `}</style>
    </Page>
  );
};

Services.propTypes = {
  services: PropTypes.array.isRequired,
};

Services.getInitialProps = async () => {
  const services = await getAllServices();

  return {
    services,
  };
};

export default withErrors(Services);
