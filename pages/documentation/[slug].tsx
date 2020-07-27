import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import SwaggerUIWrapper from '../../components/swagger';

import { getAPI, IApi, getAllAPIs } from '../../model';
import Page from '../../layouts';
import { ButtonLink } from '../../uiComponents';
import DocumentationLeftMenu from '../../components/documentation';

import constants from '../../constants';
import { roundUptime, getUptimeState } from '../../utils';

interface IProps {
  api: IApi;
  allApis: IApi[];
}

const Documentation: React.FC<IProps> = ({ api, allApis }) => {
  const {
    title,
    doc_tech_link,
    doc_tech_external,
    path,
    access_link,
    uptime,
    slug,
    is_open,
  } = api;

  const shareLink = `${constants.links.mailto.SHARE}?subject=Connaissez vous ${title} ?&body=https://api.gouv.fr/documentation/${slug}`;

  return (
    <Page
      title={`Documentation de ${title}`}
      description={`${title} est une API du service public. Découvrez sa documentation`}
      useFooter={false}
      noIndex={true}
      usePreFooter={false}
      useDocHeader={true}
      canonical={`https://api.gouv.fr/documentation/${api.slug}`}
    >
      <div className="documentation-wrapper">
        <DocumentationLeftMenu allApis={allApis} />
        <div className="documentation-content">
          <div className="documentation-header">
            <h1>{title}</h1>
            {uptime && (
              <div
                className="availability btn-icon"
                title={`Sur le dernier mois, cette API était active ${roundUptime(
                  2
                )(uptime)}% du temps`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                <span>{roundUptime(2)(uptime)}%</span>
              </div>
            )}
            <a
              className="share-api"
              title="Partager cette API aux membres de mon équipe"
              href={encodeURI(shareLink)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                stroke="none"
                strokeWidth="2"
              >
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line
                  x1="8.59"
                  y1="13.51"
                  x2="15.42"
                  y2="17.49"
                  stroke="white"
                ></line>
                <line
                  x1="15.41"
                  y1="6.51"
                  x2="8.59"
                  y2="10.49"
                  stroke="white"
                ></line>
              </svg>
            </a>
            <div className="separator" />
            {access_link && !is_open && (
              <ButtonLink href={`/les-api/${slug}#access`}>
                <div className="layout-center btn-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      fill="white"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  Demander accès à l’API
                </div>
              </ButtonLink>
            )}
          </div>
          <div className="documentation-body">
            <div>
              Bienvenue sur la documentation technique de <b>{title}</b>. Cette
              page présente les caractéristiques techniques de l’API. Pour plus
              d’information sur les caractéristiques fonctionnelles,{' '}
              <a href={path}>accèdez à la fiche métier.</a>
            </div>

            <div>
              {doc_tech_link ? (
                <SwaggerUIWrapper
                  url={`/api/v1/proxy/${encodeURIComponent(doc_tech_link)}`}
                />
              ) : doc_tech_external ? (
                <>
                  <p>
                    <span role="img" aria-label="emoji triste">
                      😔
                    </span>{' '}
                    Malheureusement, cette API ne possède pas de documentation
                    au format{' '}
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
                    Vous pouvez néanmoins accèder à la documentation en suivant
                    ce lien :
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
                  La documentation de cette API n'est pas disponible
                  publiquement.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .documentation-wrapper {
          display: flex;
          flex-direction: row;
        }
        .documentation-content {
          height: calc(100vh - ${constants.layout.HEADER_HEIGHT}px);
          overflow: auto;
          flex-grow: 1;
        }

        .documentation-body,
        .documentation-header {
          padding: 10px 30px;
        }

        .documentation-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 2px solid ${constants.colors.lightGrey};
          background-color: #133675;
          height: 60px;
          color: #fff;
        }

        .documentation-header h1 {
          color: white;
          margin: 0;
          padding: 0;
          line-height: initial;
          font-size: 1.3rem;
        }

        .availability {
          background-color: ${getUptimeState(uptime)};
          color: white;
          padding: 0 6px;
          height: 35px;
          margin-left: 15px;
          border-radius: 5px;
          font-weight: bold;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
        }
        .separator {
          flex-grow: 1;
        }

        .btn-icon > svg {
          margin-right: 5px;
        }
        .share-api {
          display: flex;
          height: 35px;
          border-radius: 5px;
          margin: 0 5px;
          padding: 0 5px;
          align-items: center;
        }
        .share-api:hover {
          background-color: rgba(1, 1, 1, 0.2);
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
