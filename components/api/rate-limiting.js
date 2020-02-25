import React from 'react';
import PropTypes from 'prop-types';

import Section from './section';

const RateLimiting = ({ rate_limiting_description }) => {
  return (
    <Section id="rate_limiting" title="Limitations d’usage">
      {rate_limiting_description ? (
        <div
          dangerouslySetInnerHTML={{
            __html: rate_limiting_description,
          }}
        />
      ) : (
        <p>
          Les limitations d'usage de cette API ne sont pas disponibles
          publiquement.
        </p>
      )}
    </Section>
  );
};

RateLimiting.defaultProps = {
  rate_limiting_description: null,
};

RateLimiting.propTypes = {
  rate_limiting_description: PropTypes.string,
};

export default RateLimiting;
