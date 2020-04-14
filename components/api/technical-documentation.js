import React from 'react';

import Section from './section';
import SwaggerUI from './swagger';
import { ButtonLink } from '../../uiComponents/button';

const TechnicalDocumentation = ({ link, external }) => {
  return (
    <Section id="doc_tech" title="Documentation technique">
      <>
        {link ? (
          <SwaggerUI url={link} />
        ) : (
          <>
            <p>
              Vous pouvez retrouver la documentation technique sur le site de
              l’API&nbsp;:
            </p>
            <ButtonLink href={external} rel="noopener" target="_blank" alt>
              Accéder à la documentation
            </ButtonLink>
          </>
        )}
      </>
    </Section>
  );
};

export default TechnicalDocumentation;
