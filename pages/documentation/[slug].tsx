import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { SwaggerUIWrapper } from '../../components';

import { getAPI, IApi, getAllAPIs } from '../../model';
import Page from '../../layouts';
import { ButtonLink } from '../../uiComponents';

import constants from '../../constants';
import Link from 'next/link';

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
    >
      <div className="documentation-wrapper">
        <div className="documentation-left-column">
          <div>
            {allApis.map(api => (
              <Link href={`/documentation/${api.slug}`} key={api.slug}>
                <a>{api.title}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className="documentation-body">
          <div className="documentation-header">
            Bienvenue sur la documentation technique de {title}. Pour accèder à
            la présentation complète de l’API <a href={path}>cliquez ici</a>.
          </div>

          <div>
            {doc_tech_link ? (
              <SwaggerUIWrapper url={doc_tech_link} />
            ) : doc_tech_external ? (
              <>
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
        .documentation-left-column {
          background-color: #051e4a;
          color: #fff;
          width: 270px;
          flex-shrink: 0;
          flex-grow: 0;
          padding: 10px 0;
        }
        .documentation-left-column a {
          padding: 10px 20px;
          display: block;
          color: #eff6ff;
          text-decoration: none;
          font-weight: 400;
        }
        .documentation-left-column a:hover {
          background-color: #0b2a63;
          text-decoration: underline;
        }
        .documentation-left-column,
        .documentation-body {
          height: calc(100vh - ${constants.layout.HEADER_HEIGHT}px);
          overflow: auto;
        }
        .documentation-body {
          flex-grow: 1;
          padding: 0 30px;
        }
        .documentation-header {
          margin-top: 20px;
        }

        #description {
          margin-bottom: 70px;
        }

        .sticky-column {
          //@ts-ignore
          top: ${parseInt(constants.layout.HEADER_HEIGHT, 10) + 20}px;
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

  //@ts-ignore
  const api = await getAPI(slug);

  const allApis = await getAllAPIs();

  return { props: { api, allApis } };
};

export default Documentation;
