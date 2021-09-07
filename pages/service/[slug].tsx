import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import { getService, IService, getAllServices } from '../../model';

import constants from '../../constants';
import Page from '../../layouts/page';

import APICard from '../../components/searchApis/apiCard';
import { ButtonLink } from '../../uiComponents';
import { HEADER_PAGE } from '../../components';
import RichReactMarkdown from '../../components/richReactMarkdown';

interface IProps extends IService {}

const Service: React.FC<IProps> = ({
  title,
  description,
  link,
  slug,
  apiList,
  body,
  screenshot,
  noindex,
}) => {
  return (
    <Page
      headerKey={HEADER_PAGE.SERVICES}
      title={title}
      description={`${title} est un exemple d’utilisation d'API du service public. ${description}`}
      canonical={`https://api.gouv.fr/service/${slug}`}
      noIndex={noindex}
    >
      <section id="title">
        <h1>{title}</h1>
        <h2>{description}</h2>
      </section>

      <div className="fr-container content">
        <div className="left-column-grid">
          <div className="left-column">
            <h3>{apiList.length > 1 ? 'Les API utilisées' : 'API utilisée'}</h3>
            <>
              {apiList.map(api => (
                <div key={api.slug}>
                  <APICard {...api} path={api.path} logo={api.logo} />
                </div>
              ))}
            </>
          </div>
          <div className="column">
            <div className="text-style">
              <RichReactMarkdown source={body} />
            </div>
            <div className="text-style">
              <h2>Accéder au service</h2>
              <p>Suivez le lien suivant pour découvrir le service :</p>
              <div className="layout-center">
                <ButtonLink
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                >
                  Accédez au service{' '}
                  <span role="img" aria-label="émoji fusée">
                    🚀
                  </span>
                </ButtonLink>
              </div>
            </div>
            <div>
              <img
                src={`/images/service-screenshot/${screenshot}`}
                alt={`capture d'écran de ${title}`}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #title {
          padding: 15px;
          text-align: center;
          background: ${constants.colors.backgroundBlueGradient};
          margin-bottom: 30px;
        }
        #title h2,
        #title h1 {
          color: #fff;
        }
        .left-column > h3 {
          position: relative;
          padding: 0 5px;
          text-align: center;
        }

        .left-column > h3:after,
        .left-column > h3:before {
          position: absolute;
          content: '';
          width: 15%;
          height: 1px;
          top: 15px;
          background-color: #ddd;
        }
        .left-column > h3:after {
          left: 0;
        }
        .left-column > h3:before {
          right: 0;
        }
        .left-column > div {
          margin-bottom: 25px;
        }

        .column {
          width: 100%;
        }

        .column img {
          margin-top: 50px;
          max-width: 100%;
        }

        .markdown-body {
          border: none;
          -webkit-box-shadow: none;
          -moz-box-shadow: none;
          box-shadow: none;
          margin-top: 2em;
          margin-bottom: 2em;
        }

        .content {
          margin-bottom: 3em;
        }
      `}</style>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const services = await getAllServices();

  return {
    paths: services.map(service => {
      return {
        params: {
          slug: service.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //@ts-ignore
  const serviceName = params.slug;

  //@ts-ignore
  const service = await getService(serviceName);

  return {
    props: {
      ...service,
    },
  };
};

export default Service;
