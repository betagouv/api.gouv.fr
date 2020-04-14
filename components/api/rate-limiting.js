import React from 'react';

import Section from './section';

const RateLimiting = ({ description }) => {
  return (
    <Section id="rate_limiting" title="Limitations d’usage">
      {description ? (
        <div
          dangerouslySetInnerHTML={{
            __html: description,
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

export default RateLimiting;
