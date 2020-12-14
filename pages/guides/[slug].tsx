import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import {
  getGuide,
  getAllGuides,
  IGuideElement,
  IGuideElementShort,
} from '../../model';
import Page from '../../layouts';

import { HEADER_PAGE } from '../../components';
import RichReactMarkdown from '../../components/richReactMarkdown';
import constants from '../../constants';
import { RichLink } from '../../uiComponents';
import Share from '../../uiComponents/share';
import Feedback from '../../components/feedback';

interface IProps {
  guide: IGuideElement;
  related_guides: IGuideElementShort[];
}

const computeRelatedGuides = async (guide: IGuideElement) => {
  const related_guides = await Promise.all(
    (guide.related_guides || []).map(
      async (slug: string) => await getGuide(slug)
    )
  );
  return related_guides.map(guide => {
    const { title, slug, image = null } = guide;
    return { title, slug, image };
  });
};

const Guide: React.FC<IProps> = ({ guide, related_guides }) => {
  const { title, slug, tagline, body, image, noindex = false } = guide;
  return (
    <Page
      headerKey={HEADER_PAGE.APIS}
      title={title}
      description={`${tagline}`}
      canonical={`https://api.gouv.fr/guides/${slug}`}
      noIndex={noindex}
      usePreFooter={false}
    >
      <div>
        <div className="hero">
          <div className="text-wrapper">
            <h1>{title}</h1>
            {tagline && <h2>{tagline}</h2>}
          </div>
        </div>
        <div className="text-style text-wrapper">
          <Share title={title} href={`https://api.gouv.fr/guides/${slug}`} />
          <RichReactMarkdown source={body} />
        </div>
        {related_guides.length > 0 && (
          <div className="text-style text-wrapper">
            <h2>Sur le même sujet</h2>
            <div className="default-grid">
              {related_guides.map(guide => (
                <RichLink
                  key={guide.slug}
                  title={guide.title}
                  image={
                    guide.image
                      ? `/images/guides/thumbnail_${guide.image}`
                      : undefined
                  }
                  href={`/guides/${guide.slug}`}
                />
              ))}
            </div>
          </div>
        )}
        <div className="text-wrapper">
          <Feedback />
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 1px 0;
          background: ${image ? `url(${`/images/guides/${image}`})` : '#fff'};
          background-position: center;
          background-size: cover;
          position: relative;
        }
        .hero:after {
          content: '';
          background: ${constants.colors.backgroundBlueGradient};
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: ${image ? `0.8` : '1'};
          z-index: 0;
        }
        .hero .text-wrapper {
          position: relative;
          z-index: 1;
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
  const related_guides = await computeRelatedGuides(guide);

  return {
    props: {
      guide,
      related_guides,
    },
  };
};

export default Guide;
