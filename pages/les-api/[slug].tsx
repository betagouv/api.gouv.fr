import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import {
  getAPI,
  IApi,
  getAllAPIs,
  getAllGuides,
  IGuideElementShort,
} from '../../model';
import Page from '../../layouts';

import {
  ApiDescription,
} from '../../components/api';

import { HEADER_PAGE } from '../../components';

interface IProps {
  api: IApi;
  guides: IGuideElementShort[];
}

const API: React.FC<IProps> = ({ api, guides }) => {
  const {
    slug,
    title,
    tagline,
    body,
    content_intro,
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
      <div id="description" className="fr-container">
        <div className="text-style">
          <ApiDescription
            title={title}
          />
        </div>
      </div>
      <style jsx>{`
        #description {
          margin-bottom: 70px;
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

  const allGuides = await getAllGuides();
  const guides = allGuides
    .filter(guide => {
      return guide.api && guide.api.indexOf(api.title) > -1;
    })
    .map(guide => {
      const { title, slug, image = null } = guide;
      return { title, slug, image };
    });

  return { props: { api, guides } };
};

export default API;
