import React from 'react';
import { GetStaticProps } from 'next';

import { IApi, getAllAPIs } from '../../model';
import Page from '../../layouts';
import DocumentationLeftMenu from '../../components/documentation';

import constants from '../../constants';

interface IProps {
  allApis: IApi[];
}

const Documentation: React.FC<IProps> = ({ allApis }) => {
  return (
    <Page
      title={`Espace documentation des APIs`}
      description={`Découvrez toutes les documentations techniques des APIs du service public.`}
      useFooter={false}
      usePreFooter={false}
      useMenu={false}
      canonical={`https://api.gouv.fr/documentation`}
    >
      <div className="documentation-wrapper">
        <DocumentationLeftMenu allApis={allApis} />
        <div className="documentation-body text-style">
          <h1>Espace documentation</h1>
          <p>
            Bienvenue sur l’espace documentation d’
            <a href="/apropos">api.gouv.fr</a>.
          </p>
          <p>
            Cette espace s’adresse à tous ceux - développeurs.se, architectes,
            products owners, craftmans, magicien.nes du web...{' '}
            <span role="img" aria-label="émoji ninja">
              🧙‍♀️
            </span>{' '}
            - qui s’intéressent aux APIs du service public.
          </p>
          <p>
            Celles-ci sont développées et maintenues dans le cadre de la
            politique d’ouverture des données, par les acteurs suivant :
          </p>
          <ul>
            <li>les administrations centrales</li>
            <li>les collectivités territoriales</li>
            <li>les ministères</li>
            <li>les agences gouvernementales</li>
          </ul>
          <p>
            Attention, les APIs tombent dans deux grandes catégories. Les{' '}
            <b>APIs ouvertes</b> et accessible à tous. Et les{' '}
            <b>APIs sous habilitations</b>.
          </p>
          <p>
            <span role="img" aria-label="émoji ninja">
              👈
            </span>{' '}
            À vous de jouer : utilisez le champ de recherche à votre gauche et
            découvrez nos APIs.
            <span role="img" aria-label="émoji ninja">
              👈
            </span>{' '}
          </p>
        </div>
      </div>

      <style jsx>{`
        .documentation-wrapper {
          display: flex;
          flex-direction: row;
        }
        .documentation-body {
          height: calc(100vh - ${constants.layout.HEADER_HEIGHT}px - 20px);
          overflow: auto;
          flex-grow: 1;
          padding: 0 30px;
        }
      `}</style>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allApis = await getAllAPIs();

  return {
    props: {
      allApis: allApis.sort((a, b) => (a.title > b.title ? 1 : -1)),
    },
  };
};

export default Documentation;
