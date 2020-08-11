import React from 'react';

import { ButtonLink } from '../../uiComponents/button';
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
  const link = swagger_link ? `/documentation/${slug}` : external_link;
  return (
    <SubSection title="Documentation technique">
      {link ? (
        <>
          <div>
            Vous êtes développeur ou architecte ? Partagez la documentation avec
            votre équipe :
          </div>
          <div className="layout-right vertical-margin">
            <ButtonLink href={link} alt>
              Accéder à la documentation
            </ButtonLink>
          </div>
        </>
      ) : (
        <div>Cette API na pas de documentation publique.</div>
      )}
    </SubSection>
  );
};

export default TechnicalDocumentation;
