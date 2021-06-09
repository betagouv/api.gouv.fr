import React from 'react';
import { GetStaticProps } from 'next';

import { IApi, getAllAPIs } from '../../model';
import Page from '../../layouts';
import { DocumentationLeftMenu } from '../../components/documentation';

import constants from '../../constants';

interface IProps {
  allApis: IApi[];
}

const Documentation: React.FC<IProps> = ({ allApis }) => {
  return (
    <Page
      title={`Espace documentation des API`}
      description={`Découvrez toutes les documentations techniques des API du service public.`}
      useFooter={false}
      usePreFooter={false}
      useDocHeader={true}
      canonical={`https://api.gouv.fr/documentation`}
    >
      <div className="documentation-wrapper">
        <DocumentationLeftMenu allApis={allApis} />
        <div className="documentation-body text-style">
          <p>
            Bienvenue sur l’espace <b>documentation technique</b> du site{' '}
            <a href="/apropos">api.gouv.fr</a>.
          </p>
          <p>
            Cet espace s’adresse à tous ceux - développeurs·ses, architectes,
            products owners, craftman·es, magicien·nes du web...{' '}
            <span role="img" aria-label="émoji ninja">
              🧙‍♀️
            </span>{' '}
            - qui s’intéressent aux API du service public.
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
            Les API tombent dans deux grandes catégories. Les{' '}
            <b>API ouvertes</b> qui sont accessibles à tous. Et les{' '}
            <b>
              API qui nécessitent une habilitation
              <span role="img" aria-label="émoji cadenas">
                🔒
              </span>
              .
            </b>
          </p>
          <p>
            <span role="img" aria-label="émoji ninja">
              👈
            </span>{' '}
            À vous de jouer : utilisez le champ de recherche à votre gauche et
            découvrez nos API.
            <span role="img" aria-label="émoji ninja">
              👈
            </span>
          </p>
        </div>
      </div>

      <style jsx>{`
        .documentation-wrapper {
          display: flex;
          flex-direction: row;
        }
        .documentation-body {
          height: calc(100vh - 116px);
          overflow: auto;
          flex-grow: 1;
          padding: 0 30px;
        }
        @media only screen and (min-width: 1px) and (max-width: 993px) {
          .documentation-content {
            height: calc(100vh - 172px);
          }
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
