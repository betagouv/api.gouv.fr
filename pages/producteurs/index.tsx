import React from 'react';
import { NextPage } from 'next';

import { getAllProducers, IProducerElement } from '../../model';

import Page from '../../layouts/page';

interface Props {
  producers: IProducerElement[];
}

const Producteurs: NextPage<Props> = ({ producers }) => {
  return (
    <Page
      title="Les exemples de services en ligne réalisés avec des APIs"
      description="Vous vous demandez comment utiliser une APIs du service public ? Inspirez-vous d’un cas pratique."
    >
      <section className="content-container page-baseline">
        <h1>
          Depuis 2016, nous accompagnons les acteurs publics à la réalisation de
          services numériques pour tous les français
        </h1>
      </section>
      <section id="realisations" className="page-body-container">
        <div className="content-container default-grid">
          {producers.map(producer => (
            <div key={producer.slug}>{producer.name}</div>
          ))}
        </div>
      </section>
    </Page>
  );
};

export const getStaticProps = async () => {
  const services = await getAllProducers();

  return {
    props: {
      services,
    },
  };
};

export default Producteurs;
