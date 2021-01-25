import React from 'react';

import { ButtonLink } from '../../uiComponents/button';
import Emoji from '../../uiComponents/emoji';
import SubSection from './subSection';

interface IProps {
  swagger_link?: string;
  external_link?: string;
  slug: string;
}

const TechnicalDocumentation: React.FC<IProps> = ({
  swagger_link,
  external_link,
  slug,
}) => {
  const link = external_link ? external_link : `/documentation/${slug}`;
  return (
    <SubSection title="Documentation technique">
      {external_link || swagger_link ? (
        <>
          <div>
            Vous êtes développeur ou architecte ? Partagez la documentation avec
            votre équipe :
          </div>
          <div className="layout-right vertical-margin">
            {swagger_link && (
              <ButtonLink href={`/documentation/${slug}`}>
                <Emoji emoji="👩‍💻" label="code" />
                Tester l’API
              </ButtonLink>
            )}
          </div>
          <div className="layout-right vertical-margin">
            {link && (
              <ButtonLink href={link} alt>
                <Emoji emoji="📚" label="documentation" />
                Accéder à la documentation
              </ButtonLink>
            )}
          </div>
        </>
      ) : (
        <div>Cette API n’a pas de documentation publique.</div>
      )}
    </SubSection>
  );
};

export default TechnicalDocumentation;
