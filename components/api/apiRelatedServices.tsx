import React from 'react';
import ServiceCard from '../serviceCard';
import { IService } from '../../model';
import Section from './section';

interface IProps {
  services: IService[];
}

const ApiRelatedServices: React.FC<IProps> = ({ services = [] }) => {
  return (
    <Section id="services" title="Réalisations">
      {services.length > 0 ? (
        <div className="default-grid">
          {services.map(service => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      ) : (
        <p>
          Il n’y a pas à notre connaissance de réalisations utilisant cette API.
        </p>
      )}
    </Section>
  );
};

export default ApiRelatedServices;
