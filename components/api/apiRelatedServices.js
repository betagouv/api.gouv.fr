import React from 'react';
import PropTypes from 'prop-types';

import ServiceCard from '../serviceCard';

import Section from './section';

const ApiRelatedServices = ({ services }) => {
  return (
    <Section id="services" title="Services">
      {services ? (
        <div className="default-grid" style={{ style: '100%' }}>
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
    </Section>
  );
};

ApiRelatedServices.defaultProps = {
  services: null,
};

ApiRelatedServices.propTypes = {
  services: PropTypes.array,
};

export default ApiRelatedServices;
