import React from 'react';
import { NextPage } from 'next';

import { getAllServices, IService } from '../model';

import Page from '../layouts/page';
import { HEADER_PAGE, ServiceCard } from '../components';

interface Props {
  services: IService[];
}

const Services: NextPage<Props> = ({ services }) => {
  return (
    <Page
      headerKey={HEADER_PAGE.SERVICES}
      title="Les exemples de services en ligne réalisés avec des APIs"
      description="Vous vous demandez comment utiliser une APIs du service public ? Inspirez-vous d’un cas pratique."
    >
      <section className="content-container page-baseline">
        <h2>
          Depuis 2016, nous accompagnons les acteurs publics à la réalisation de
          services numériques pour tous les français
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

export const getStaticProps = async () => {
  const services = await getAllServices();

  return {
    props: {
      services,
    },
  };
};

export default Services;
