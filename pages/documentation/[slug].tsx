import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import SwaggerUIWrapper from '../../components/swagger';

import { getAPI, IApi, getAllAPIs } from '../../model';
import Page from '../../layouts';
import { ButtonLink } from '../../uiComponents';
import DocumentationLeftMenu from '../../components/documentation';

import constants from '../../constants';

interface IProps {
  api: IApi;
  allApis: IApi[];
}

const Documentation: React.FC<IProps> = ({ api, allApis }) => {
  const { title, doc_tech_link, doc_tech_external, path } = api;

  return (
    <Page
      title={`Documentation de ${title}`}
      description={`${title} est une API du service public. Découvrez sa documentation`}
      useFooter={false}
      noIndex={true}
      usePreFooter={false}
      useMenu={false}
      canonical={`https://api.gouv.fr/documentation/${api.slug}`}
    >
      <div className="documentation-wrapper">
        <DocumentationLeftMenu allApis={allApis} />
        <div className="documentation-body">
          <div className="documentation-header">
            Bienvenue sur la documentation technique de <b>{title}</b>. Pour
            accèder à la présentation complète de l’API{' '}
            <a href={path}>cliquez ici</a>.
          </div>

          <div>
            {doc_tech_link ? (
              <SwaggerUIWrapper url={doc_tech_link} />
            ) : doc_tech_external ? (
              <>
                <h1>{title}</h1>
                <p>
                  <span role="img" aria-label="emoji triste">
                    😔
                  </span>{' '}
                  Malheureusement, cette API ne possède pas de documentation au
                  format{' '}
                  <a
                    href="https://swagger.io/docs/specification/about/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Open API
                  </a>
                  .
                </p>

                <p>
                  Vous pouvez néanmoins accèder à la documentation en suivant ce
                  lien :
                </p>
                <ButtonLink
                  href={doc_tech_external}
                  rel="noopener"
                  target="_blank"
                  alt
                >
                  Accéder à la documentation
                </ButtonLink>
              </>
            ) : (
              <p>
                La documentation de cette API n'est pas disponible publiquement.
              </p>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .documentation-wrapper {
          display: flex;
          flex-direction: row;
        }
        .documentation-body {
          height: calc(100vh - ${constants.layout.HEADER_HEIGHT}px);
          overflow: auto;
          flex-grow: 1;
          padding: 0 30px;
        }
        .documentation-header {
          margin-top: 20px;
        }
      `}</style>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const apis = await getAllAPIs();

  return {
    paths: apis.map(api => {
      return {
        params: {
          slug: api.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //@ts-ignore
  const slug = params.slug;

  const allApis = await getAllAPIs();

  //@ts-ignore
  const api = await getAPI(slug);

  return {
    props: {
      api,
      allApis: allApis.sort((a, b) => (a.title > b.title ? 1 : -1)),
    },
  };
};

export default Documentation;
