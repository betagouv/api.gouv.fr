import React from 'react';
import ServiceCard from '../serviceCard';
import { IService } from '../../model';
import Section from './section';

interface IProps {
  services: IService[];
}

const ApiRelatedServices: React.FC<IProps> = ({ services = [] }) => {
  return (
    <Section id="services" title="Services">
      {services.length > 0 ? (
        <div className="default-grid">
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
