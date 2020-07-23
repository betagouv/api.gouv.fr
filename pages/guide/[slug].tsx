import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import { getGuide, getAllGuides, IGuideElement } from '../../model';
import Page from '../../layouts';

import { HEADER_PAGE } from '../../components';
import RichReactMarkdown from '../../components/richReactMarkdown';
import constants from '../../constants';

interface IProps {
  guide: IGuideElement;
}

const API: React.FC<IProps> = ({ guide }) => {
  const { title, slug, tagline, body, noindex = false } = guide;
  return (
    <Page
      headerKey={HEADER_PAGE.APIS}
      title={title}
      description={`${tagline}`}
      canonical={`https://api.gouv.fr/guide/${slug}`}
      noIndex={noindex}
    >
      <div>
        <div className="hero">
          <div className="text-wrapper">
            <h1>{title}</h1>
            {tagline && <h2>{tagline}</h2>}
          </div>
        </div>
        <div className="text-style text-wrapper">
          <RichReactMarkdown source={body} />
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 1px 0;
          background: ${constants.colors.backgroundBlueGradient};
        }

        .hero h2 {
          font-size: 1.2rem;
          color: #fff;
          text-align: center;
        }
        .hero h1 {
          margin-top: 0px;
          text-align: center;
          margin-bottom: 20px;
          color: #fff;
        }
      `}</style>
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
