import React from "react";
import PropTypes from "prop-types";

import Section from "./section";

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

            <a
              className="large ui button"
              href={link}
              target="_blank"
              rel="noopener"
            >
              <i className="icon linkify"></i> Accéder au monitoring
            </a>
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
  description: null,
  link: null
};

Monitoring.propTypes = {
  description: PropTypes.string,
  link: PropTypes.string
};

export default Monitoring;
