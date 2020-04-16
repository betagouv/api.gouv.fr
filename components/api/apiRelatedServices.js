import React from 'react';
import ServiceCard from '../serviceCard';

import Section from './section';

const ApiRelatedServices = ({ services = [] }) => {
  return (
    <Section id="services" title="Services">
      {services.length > 0 ? (
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

export default ApiRelatedServices;
