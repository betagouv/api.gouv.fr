import React, { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { SwaggerUIWrapper } from '../../components';

import { getAPI, IApi, getAllAPIs } from '../../model';
import Page from '../../layouts';
import { ButtonLink, SearchBar } from '../../uiComponents';

import constants from '../../constants';
import Link from 'next/link';

interface IProps {
  api: IApi;
  allApis: IApi[];
}

const Documentation: React.FC<IProps> = ({ api, allApis }) => {
  const { title, doc_tech_link, doc_tech_external, path } = api;
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(allApis);

  useEffect(() => {
    if (!searchTerm) {
      setResults(allApis);
    } else {
      const searchTermLower = searchTerm.toLowerCase();
      const newResults = allApis.reduce((matchingApis, api) => {
        if (api.title.toLowerCase().indexOf(searchTermLower) > -1) {
          //@ts-ignore
          matchingApis.push(api);
        }
        return matchingApis;
      }, []);
      setResults(newResults);
    }
  }, [searchTerm, allApis]);

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
          <div className="search-wrapper layout-center">
            <SearchBar
              placeholder="Rechercher une API"
              onSearch={setSearchTerm}
            />
          </div>
          <div className="documentation-api-list">
            {results.length === 0 ? (
              <div>Aucun résultat n'a été trouvé.</div>
            ) : (
              results.map(api => (
                <Link href={`/documentation/${api.slug}`} key={api.slug}>
                  <a>
                    {api.title}
                    {api.doc_tech_link && (
                      <span className="swagger-label">swagger</span>
                    )}
                  </a>
                </Link>
              ))
            )}
          </div>
        </div>
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
        .documentation-left-column {
          background-color: #051e4a;
          color: #fff;
          width: 300px;
          flex-shrink: 0;
          flex-grow: 0;
        }
        .documentation-left-column div.search-wrapper {
          height: 80px;
          padding: 0 20px;
          background-color: #0b2a63;
          border-bottom: 2px solid #051e4a;
        }
        .documentation-api-list > div,
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
        span.swagger-label {
          background-color: ${constants.colors.orange};
          color: #333;
          padding: 1px 5px;
          margin-left: 5px;
          font-size: 0.7rem;
          font-weight: bold;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .documentation-api-list,
        .documentation-body {
          height: calc(100vh - ${constants.layout.HEADER_HEIGHT}px - 80px);
          overflow: auto;
        }
        .documentation-body {
          flex-grow: 1;
          padding: 0 30px;
        }
        .documentation-header {
          margin-top: 20px;
        }

        @media only screen and (min-width: 1px) and (max-width: 768px) {
          .documentation-left-column {
            display: none;
          }
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
