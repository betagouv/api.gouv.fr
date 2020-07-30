import React, { PropsWithChildren } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import SwaggerUIWrapper from '../../components/swagger';

import { getAPI, IApi, getAllAPIs } from '../../model';
import Page from '../../layouts';
import { ButtonLink, ExternalLink } from '../../uiComponents';
import DocumentationLeftMenu from '../../components/documentation';

import constants from '../../constants';
import { roundUptime, getUptimeState } from '../../utils';
import share from '../../uiComponents/icon/share';
import cardiogram from '../../uiComponents/icon/cardiogram';
import Emoji from '../../uiComponents/emoji';

interface IProps {
  api: IApi;
  allApis: IApi[];
}

const DocSection: React.FC<PropsWithChildren<{ label: any }>> = ({
  children,
  label,
}) => (
  <div>
    <div className="wrapper">
      <div className="label">{label}</div>
      <div className="description">{children}</div>
    </div>
    <style jsx>{`
      .wrapper {
        max-width: 600px;
        margin-top: 20px;
        background-color: ${constants.colors.lightGrey};
        padding: 20px;
        border-radius: 5px;
      }
      .label {
        font-weight: bold;
        font-size: 1.2rem;
        line-height: 1.8rem;
        margin-bottom: 5px;
      }
    `}</style>
  </div>
);

const ExternalDoc: React.FC<{ doc_link: string }> = ({ doc_link }) => (
  <DocSection
    label={
      <>
        <Emoji emoji="💻" label="Documentation" />
        Documentation externe
      </>
    }
  >
    Cette API possède une documentation complémentaire, à laquelle vous pouvez
    accéder en <ExternalLink href={doc_link}>cliquant ici</ExternalLink>
  </DocSection>
);

const Habilitation: React.FC<{ slug: string }> = ({ slug }) => (
  <DocSection
    label={
      <>
        <Emoji emoji="🔒" label="lock" />
        API sous habilitation
      </>
    }
  >
    <div style={{ marginBottom: '10px' }}>
      Cette API nécessite une habilitation. Vous pouvez consulter sa
      documentation, mais pour accéder aux données vous devrez faire une demande
      d'accès
    </div>
    <div className="layout-right">
      <ButtonLink href={`/les-api/${slug}/demande-acces`}>
        <div className="layout-center btn-icon">Demander accès à l’API</div>
      </ButtonLink>
    </div>
  </DocSection>
);

const AccountNeeded: React.FC<{ access_link: string }> = ({ access_link }) => (
  <DocSection
    label={
      <>
        <Emoji emoji="🔒" label="lock" />
        Compte nécessaire pour appeler l’API
      </>
    }
  >
    <div style={{ marginBottom: '10px' }}>
      Attention ! Cette API nécessite de se créer un compte afin d’accéder aux
      données :
    </div>
    <div className="layout-right">
      <ButtonLink href={access_link}>
        <div className="layout-center btn-icon">Se créer un compte</div>
      </ButtonLink>
    </div>
  </DocSection>
);

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
                {cardiogram}
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
              {share}
            </a>
          </div>
          <div className="documentation-body">
            <div>
              Bienvenue sur la documentation technique de <b>{title}</b>. Cette
              page présente les caractéristiques techniques de l’API. Pour plus
              d’information sur les caractéristiques fonctionnelles,{' '}
              <a href={path}>accédez à la fiche métier.</a>
            </div>

            <div className="sections">
              {access_link && is_open === -1 && <Habilitation slug={slug} />}
              {access_link && is_open === 0 && (
                <AccountNeeded access_link={access_link} />
              )}
              {access_link && is_open !== 1 && doc_tech_external && (
                <div className="separator" />
              )}
              {doc_tech_external && (
                <ExternalDoc doc_link={doc_tech_external} />
              )}
            </div>

            <div>
              {doc_tech_link ? (
                <SwaggerUIWrapper
                  url={`/api/v1/proxy/${encodeURIComponent(doc_tech_link)}`}
                />
              ) : doc_tech_external ? (
                <>
                  <p>
                    <Emoji emoji="😔" label="triste" />
                    Malheureusement, cette API ne possède pas de documentation
                    au format{' '}
                    <ExternalLink href="https://swagger.io/docs/specification/about/">
                      Open API
                    </ExternalLink>
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
        .documentation-content .sections {
          display: flex;
        }
        .documentation-content .sections .separator {
          width: 20px;
        }

        .documentation-body,
        .documentation-header {
          padding: 10px 30px;
        }

        .documentation-header {
          display: flex;
          align-items: center;
          justify-content: start;
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
