import React from "react";
import PropTypes from "prop-types";

import ScrollableSection from "./scrollable-menu/scrollable-section";

const RateLimiting = ({ rate_limiting_description, addRef }) => {
  return (
    <ScrollableSection
      id="rate_limiting"
      title="Limitations d’usage"
      addRef={addRef}
    >
      {rate_limiting_description ? (
        <div
          dangerouslySetInnerHTML={{
            __html: rate_limiting_description
          }}
        />
      ) : (
        <p>
          Les limitations d'usage de cette API ne sont pas disponibles
          publiquement.
        </p>
      )}
    </ScrollableSection>
  );
};

RateLimiting.defaultProps = {
  rate_limiting_description: null
};

RateLimiting.propTypes = {
  rate_limiting_description: PropTypes.string
};

export default RateLimiting;
