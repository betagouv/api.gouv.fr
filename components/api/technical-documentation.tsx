import React from 'react';

import { ButtonLink } from '../../uiComponents/button';
import SubSection from './subSection';

interface IProps {
  swagger_link?: string;
  external_doc_link?: string;
  slug: string;
}

const TechnicalDocumentation = ({ swagger_link, external_doc_link, slug }) => {
  const doc_link = external_doc_link ? `/documentation/${slug}` : swagger_link;
  return (
    <SubSection title="Documentation technique">
      {doc_link ? (
        <>
          <div>
            Vous êtes développeur ou architecte ? Partagez la documentation avec
            votre équipe :
          </div>
          <div className="layout-right vertical-margin">
            <ButtonLink href={doc_link} alt>
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
