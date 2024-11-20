import React from 'react';
import { RichLink } from '../../uiComponents';
import RichReactMarkdown from '../../components/richReactMarkdown';
import Section from '../../components/api/section';
import { IGuideElementShort } from '../../model';
import { H3WithAnchor } from '../../uiComponents/titleWithAnchor';
import slugify from 'slugify';

const ApiDescription: React.FC<{
  content_intro?: string;
  body: string;
  guides: IGuideElementShort[];
  title: string;
}> = ({ content_intro, guides, body, title }) => (
  <Section id="api-description" title="Description">
    <>
      <div style={{backgroundColor: "#FFE9E6", color: "#B34000", padding: "1rem"}}>
        <strong>⚠️ Ces informations ne sont plus mises à jour depuis le 06/09/2024.</strong><br />
        Le site API.gouv.fr va progressivement être fusionné dans le catalogue unique data.gouv.fr. <br /><br />
        Retrouvez la fiche d'information à jour de cette API sur la nouvelle page API de Data.gouv.fr <a href={`https://data.gouv.fr/fr/dataservices/${slugify(title)}`} target="_blank" rel="noopener noreferrer">⇢ Consulter la fiche à jour</a>
      </div>
      
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
