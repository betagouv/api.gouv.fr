import React from "react";
import PropTypes from "prop-types";

import ScrollableSection from "./scrollable-menu/scrollable-section";

const Monitoring = ({ monitoring_description, monitoring_link, addRef }) => {
  return (
    <ScrollableSection id="monitoring" title="Supervision" addRef={addRef}>
      <>
        {monitoring_description && (
          <div dangerouslySetInnerHTML={{ __html: monitoring_description }} />
        )}

        {monitoring_link ? (
          <>
            <p>Les moniteurs de cette API sont disponibles publiquement.</p>

            <a
              className="large ui button"
              href={monitoring_link}
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
    </ScrollableSection>
  );
};

Monitoring.defaultProps = {
  monitoring_description: null,
  monitoring_link: null
};

Monitoring.propTypes = {
  monitoring_description: PropTypes.string,
  monitoring_link: PropTypes.string
};

export default Monitoring;
