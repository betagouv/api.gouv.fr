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
      title="Liste des producteurs d'API"
      description="La liste de toutes les administrations qui propose une API disponible publiquement."
    >
      <section className="fr-container page-baseline">
        <h1>{producers.length} entités administratives ouvrent leur données</h1>
      </section>
      <section id="realisations" className="page-body-container">
        <div className="fr-container default-grid">
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
          padding: 25px 30px;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
          transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
          display: flex;
          flex-direction: column;
        }
        a:hover {
          transform: translateY(-8px);
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
        }

        a > div img {
          width: auto;
          max-height: 100px;
          max-width: 100%;
          margin-right: 15px;
          margin-bottom: 15px;
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
