import React from 'react';
import PropTypes from 'prop-types';

import Section from './section';
import { ButtonLink } from '../../uiComponents/button';

const Monitoring = ({ monitoring_description, monitoring_link }) => {
  return (
    <Section id="monitoring" title="Supervision">
      <>
        {monitoring_description && (
          <div dangerouslySetInnerHTML={{ __html: monitoring_description }} />
        )}

        {monitoring_link ? (
          <>
            <p>Les moniteurs de cette API sont disponibles publiquement.</p>

            <ButtonLink
              className="large ui button"
              href={monitoring_link}
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

Monitoring.defaultProps = {
  monitoring_description: null,
  monitoring_link: null,
};

Monitoring.propTypes = {
  monitoring_description: PropTypes.string,
  monitoring_link: PropTypes.string,
};

export default Monitoring;
