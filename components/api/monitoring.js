import React from 'react';

import Section from './section';
import { ButtonLink } from '../../uiComponents/button';

const Monitoring = ({ description, link }) => {
  return (
    <Section id="monitoring" title="Supervision">
      <>
        {description && (
          <div dangerouslySetInnerHTML={{ __html: description }} />
        )}

        {link ? (
          <>
            <p>Les moniteurs de cette API sont disponibles publiquement.</p>

            <ButtonLink
              className="large ui button"
              href={link}
              target="_blank"
              rel="noopener"
              alt
              large
            >
              <i className="icon linkify"></i> Accéder au monitoring
            </ButtonLink>
          </>
        ) : (
          <p>
            Les moniteurs de cette API ne sont pas disponibles publiquement.
          </p>
        )}
      </>
    </Section>
  );
};

export default Monitoring;
