import React from 'react';

import Section from './section';
import { ButtonLink } from '../../uiComponents/button';

const TechnicalDocumentation = ({ link, external, slug }) => {
  return (
    <Section id="doc_tech" title="Documentation technique">
      {external ? (
        <>
          <p>
            Cette API ne possède pas de documentation au format{' '}
            <a
              href="https://swagger.io/docs/specification/about/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Open API
            </a>
            .
          </p>
          <p>
            Vous pouvez néanmoins accèder à la documentation sur le site dédié :
          </p>
          <ButtonLink href={external} rel="noopener" target="_blank" alt>
            Accéder à la documentation
          </ButtonLink>
        </>
      ) : link ? (
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
