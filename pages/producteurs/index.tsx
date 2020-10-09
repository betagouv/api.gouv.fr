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
      title="Liste des producteurs d'APIs"
      description="La liste de toutes les administrations qui propose une API disponible publiquement."
    >
      <section className="content-container page-baseline">
        <h1>{producers.length} entités administratives ouvrent leur données</h1>
      </section>
      <section id="realisations" className="page-body-container">
        <div className="content-container default-grid">
          {producers.map(producer => (
            <a
              href={`/producteurs/${producer.slug}`}
              key={producer.slug}
              className="dont-apply-link-style"
            >
              <div className="layout-center">
                <img
                  src={`/images/api-logo/${producer.logo}`}
                  alt={`logo de ${producer.name}`}
                />
              </div>
              <span>{producer.name}</span>
            </a>
          ))}
        </div>
      </section>
      <style jsx>{`
        a {
          border-radius: 5px;
          background-color: #fff;
          text-align: center;
          padding: 15px 10px;
        }
        a > div img {
          width: auto;
          max-height: 70px;
          margin-right: 15px;
          flex-shrink: 1;
        }
      `}</style>
    </Page>
  );
};

export const getStaticProps = async () => {
  const producers = await getAllProducers();

  return {
    props: {
      producers,
    },
  };
};

export default Producteurs;
