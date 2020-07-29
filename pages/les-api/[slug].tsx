import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import {
  getAPI,
  getAllServices,
  IService,
  IApi,
  getAllAPIs,
} from '../../model';
import Page from '../../layouts';

import {
  PageHeader,
  Access,
  SupportAndTeam,
  Partners,
  TechnicalDocumentation,
  ApiRelatedServices,
  Content,
} from '../../components/api';

import ApiDetails from '../../components/api/apiDetails';
import { HEADER_PAGE } from '../../components';

import constants from '../../constants';

interface IProps {
  api: IApi;
  services: IService[];
}

const API: React.FC<IProps> = ({ api, services = null }) => {
  const {
    slug,
    title,
    tagline,
    logo,
    owner,
    owner_acronym,
    uptime,
    // last_update,
    contact_link,
    // external_site,
    doc_tech_link,
    doc_tech_external,
    monitoring_link,
    monitoring_description,
    rate_limiting_description,
    rate_limiting_resume,
    body,
    is_open,
    partners,
  } = api;

  return (
    <Page
      headerKey={HEADER_PAGE.APIS}
      title={title}
      description={`${title} est une des APIs du service public. ${tagline}`}
      canonical={`https://api.gouv.fr/les-api/${slug}`}
    >
      <PageHeader
        title={title}
        logo={logo || constants.logo}
        tagline={tagline}
        owner={owner}
        owner_acronym={owner_acronym}
      />

      <div id="description" className="content-container">
        <div className="right-column-grid">
          <div className="left-column text-style">
            <Content content={body} />
            <ApiRelatedServices services={services} />
          </div>
          <div className="right-column info-column">
            <Access
              is_open={is_open}
              slug={slug}
              doc_external_link={doc_tech_external}
            />
            <ApiDetails
              monitoring={monitoring_description}
              monitoring_link={monitoring_link}
              rate_limiting={rate_limiting_description}
              rate_limiting_resume={rate_limiting_resume}
              uptime={uptime}
            />
            <TechnicalDocumentation
              doc_link={doc_tech_link}
              external_link={doc_tech_external}
              slug={slug}
            />

            <SupportAndTeam
              logo={logo}
              owner={owner}
              owner_acronym={owner_acronym}
              link={contact_link}
            />

            <Partners partners={partners} />
          </div>
        </div>
      </div>
      <style jsx>{`
        #description {
          margin-bottom: 70px;
        }

        .right-column-grid {
          display: grid;
          grid-template-columns: 65% 35%;
          grid-gap: 40px;
        }

        .info-column {
          border-left: 2px solid ${constants.colors.lightBlue};
          padding: 0 0 0 40px;
        }
        @media only screen and (min-width: 1px) and (max-width: 900px) {
          .right-column-grid {
            display: flex;
            flex-direction: column-reverse;
          }
          .info-column {
            border: none;
            padding: 0;
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

  //@ts-ignore
  const api = await getAPI(slug);

  const services = await getAllServices();

  const apiServices = services.filter(service => {
    return service.api.indexOf(api.title) > -1;
  });

  return { props: { api, services: apiServices } };
};

export default API;
