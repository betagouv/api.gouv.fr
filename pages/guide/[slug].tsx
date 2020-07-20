import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import { getGuide, getAllGuides, IGuideElement } from '../../model';
import Page from '../../layouts';

import { HEADER_PAGE } from '../../components';
import RichReactMarkdown from '../../components/richReactMarkdown';

interface IProps {
  guide: IGuideElement;
}

const API: React.FC<IProps> = ({ guide }) => {
  const { title, slug, tagline, body } = guide;
  return (
    <Page
      headerKey={HEADER_PAGE.APIS}
      title={title}
      description={`${tagline}`}
      canonical={`https://api.gouv.fr/guide/${slug}`}
    >
      <div className="text-style text-wrapper">
        <h1>{title}</h1>
        <RichReactMarkdown source={body} />
      </div>
      <style jsx>{``}</style>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const guides = await getAllGuides();

  return {
    paths: guides.map((guide: IGuideElement) => {
      return {
        params: {
          slug: guide.slug,
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
  const guide = await getGuide(slug);

  return { props: { guide } };
};

export default API;
