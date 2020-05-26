import React from 'react';

import Section from './section';
import { ButtonLink } from '../../uiComponents/button';

const TechnicalDocumentation = ({ link, external, slug }) => {
  return (
    <Section id="doc_tech" title="Documentation technique">
      {external || link ? (
        <>
          <p>
            Vous êtes développeur ou architecte ? Accèdez à la documentation de
            cette API&nbsp;:
          </p>
          <ButtonLink href={`/documentation/${slug}`} alt large>
            Accéder à la documentation
          </ButtonLink>
        </>
      ) : (
        <p>La documentation de cette API n'est pas disponible publiquement.</p>
      )}
    </Section>
  );
};

export default TechnicalDocumentation;
