import React from 'react';
import PropTypes from 'prop-types';

import withErrors from '../components/hoc/with-errors';

import { getAllServices } from '../utils/api';

import Page from '../layouts/page';
import { HEADER_PAGE, ServiceCard } from '../components';

const Services = ({ services }) => {
  return (
    <Page
      headerKey={HEADER_PAGE.SERVICES}
      title="Les exemples de services en ligne réalisés avec des APIs"
      description="Vous vous demandez comment utiliser une APIs du service public ? Inspirez-vous d’un cas pratique."
    >
      <section className="content-container page-baseline">
        <h2>
          Depuis 2016, nous accompagnons les acteurs publics à la réalisation de
          services numériques pour tous les francais
        </h2>
      </section>
      <section id="realisations" className="page-body-container">
        <div className="content-container default-grid">
          {services.map(service => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </section>
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
