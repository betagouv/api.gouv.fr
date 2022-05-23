import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { logParcoursClient } from '../../utils/client/analytics';

import {
  getAPI,
  getAllServices,
  IService,
  IApi,
  getAllAPIs,
  getAllGuides,
  IGuideElementShort,
} from '../../model';
import Page from '../../layouts';

import {
  PageHeader,
  Access,
  SupportAndTeam,
  Partners,
  TechnicalDocumentation,
  ApiOpenDataSources,
  ApiDescription,
} from '../../components/api';

import ApiDetails from '../../components/api/apiDetails';
import { HEADER_PAGE } from '../../components';

import constants from '../../constants';
import Feedback from '../../components/feedback';
import { fetchDatagouvDatasets } from '../../components/api/apiOpenDataSources';

interface IProps {
  api: IApi;
  services: IService[];
  guides: IGuideElementShort[];
  datagouvDatasets: { uuid: string; title: string }[];
}

const API: React.FC<IProps> = ({ api, guides, datagouvDatasets }) => {
  const {
    slug,
    title,
    tagline,
    logo,
    owner,
    owner_acronym,
    owner_slug,
    uptime,
    contact_link,
    account_link,
    doc_tech_link,
    doc_tech_external,
    monitoring_link,
    monitoring_description,
    rate_limiting_description,
    rate_limiting_resume,
    rate_limiting_link,
    body,
    is_open,
    partners,
    content_intro,
    is_france_connected,
    hide_pre_footer,
  } = api;

  return (
    <Page
      headerKey={HEADER_PAGE.APIS}
      title={title}
      description={`${title} est une des APIs du service public. ${tagline}`}
      canonical={`https://api.gouv.fr/les-api/${slug}`}
      usePreFooter={!hide_pre_footer}
    >
      <PageHeader
        title={title}
        logo={logo || constants.logo}
        tagline={tagline}
        owner={owner}
        owner_acronym={owner_acronym}
        owner_slug={owner_slug}
      />

      <div id="description" className="fr-container">
        <div className="right-column-grid">
          <div className="left-column text-style">
            <ApiDescription
              guides={guides}
              body={body}
              content_intro={content_intro}
            />

            {datagouvDatasets.length > 0 && (
              <ApiOpenDataSources datasetsList={datagouvDatasets} />
            )}

            <Feedback />
          </div>
          <div className="right-column info-column">
            <Access
              is_open={is_open}
              slug={slug}
              doc_swagger_link={doc_tech_link}
              doc_external_link={doc_tech_external}
              account_link={account_link}
            />
            <SupportAndTeam
              logo={logo}
              owner={owner}
              owner_acronym={owner_acronym}
              owner_slug={owner_slug}
              link={contact_link}
            />
            <TechnicalDocumentation
              swagger_link={doc_tech_link}
              external_link={doc_tech_external}
              slug={slug}
            />
            <ApiDetails
              monitoring={monitoring_description}
              monitoring_link={monitoring_link}
              rate_limiting={rate_limiting_description}
              rate_limiting_resume={rate_limiting_resume}
              rate_limiting_link={rate_limiting_link}
              uptime={uptime}
              is_france_connected={is_france_connected}
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
          grid-template-columns: 65% 31%;
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

  const datagouvDatasets = await fetchDatagouvDatasets(api.datagouv_uuid || []);

  const allServices = await getAllServices();
  const services = allServices.filter(service => {
    return service.api.indexOf(api.title) > -1;
  });

  const allGuides = await getAllGuides();
  const guides = allGuides
    .filter(guide => {
      return guide.api && guide.api.indexOf(api.title) > -1;
    })
    .map(guide => {
      const { title, slug, image = null } = guide;
      return { title, slug, image };
    });

  return { props: { api, services, guides, datagouvDatasets } };
};

export default API;
