import React from 'react';
import PropTypes from 'prop-types';

import ServiceCard from '../service-card';

import Section from './section';

const Services = ({ services }) => {
  return (
    <Section id="services" title="Services">
      <div className="content-container services-container">
        {services ? (
          <div className="ui three stackable cards">
            {services.map(service => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        ) : (
          <p>
            La liste des services utilisant cette API ne sont pas disponibles
            publiquement.
          </p>
        )}
      </div>

      <style jsx>{`
        .services-container {
          margin-bottom: 3em;
        }
      `}</style>
    </Section>
  );
};

Services.defaultProps = {
  services: null,
};

Services.propTypes = {
  services: PropTypes.array,
};

export default Services;
