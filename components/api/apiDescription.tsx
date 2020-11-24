import React from 'react';
import { RichLink } from '../../uiComponents';
import RichReactMarkdown from '../../components/richReactMarkdown';
import Section from '../../components/api/section';
import { IGuideElementShort } from '../../model';
import { H3WithAnchor } from '../../uiComponents/titleWithAnchor';

const ApiDescription: React.FC<{
  content_intro?: string;
  body: string;
  guides: IGuideElementShort[];
}> = ({ content_intro, guides, body }) => (
  <Section id="api-description" title="Description">
    <>
      {content_intro && <RichReactMarkdown source={content_intro} />}
      {guides.length > 0 && (
        <>
          <H3WithAnchor>Exemples d’application</H3WithAnchor>
          <div className="default-grid api-examples">
            {guides.map(guide => (
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
        </>
      )}
      <RichReactMarkdown source={body} />
    </>
    <style jsx>{`
      .api-examples {
        margin-bottom: 40px;
      }
    `}</style>
  </Section>
);
export default ApiDescription;
