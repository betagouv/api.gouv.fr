import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist';

const Swagger = ({ url }) => {
  useEffect(() => {
    const ui = SwaggerUIBundle({
      url,
      dom_id: '#swagger-ui-container',
      presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
      plugins: [SwaggerUIBundle.plugins.DownloadUrl],
      layout: 'StandaloneLayout',
      validatorUrl: null,
      defaultModelExpandDepth: 0,
    });

    window.ui = ui;
  }, []);

  return (
    <div className="swagger-section">
      <div id="swagger-ui-container" className="swagger-ui-wrap"></div>

      <style jsx>{`
        .swagger-section {
          background-color: whitesmoke;
          padding: 10px 2em;
        }

        .swagger-section hgroup.main h2 {
          font-size: 1em;
        }

        .swagger-section .info_title {
        }

        .swagger-section .swagger-ui .wrapper section.models {
          background-color: #fff;
        }
      `}</style>
    </div>
  );
};

Swagger.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Swagger;
