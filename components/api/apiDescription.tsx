import React from 'react';
import { RichLink } from '../../uiComponents';
import RichReactMarkdown from '../../components/richReactMarkdown';
import Section from '../../components/api/section';
import { IGuideElementShort } from '../../model';

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
          <h3>Exemples d’application</h3>
          <div className="default-grid api-examples">
            {guides.map(guide => (
              <RichLink
                key={guide.slug}
                title={guide.title}
                image={
                  guide.image
                    ? `/images/guide/thumbnail_${guide.image}`
                    : undefined
                }
                href={`/guide/${guide.slug}`}
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
