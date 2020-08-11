import React, { useEffect } from 'react';
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist';

interface IProps {
  url: string;
}

const SwaggerUIWrapper: React.FC<IProps> = ({ url }) => {
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

    //@ts-ignore
    window.ui = ui;
  }, [url]);

  return (
    <div className="swagger-section">
      <div id="swagger-ui-container" className="swagger-ui-wrap"></div>

      <style global jsx>{`
        #swagger-ui-container .topbar {
          display: none;
        }

        .swagger-section,
        .information-container.wrapper {
          background-color: #fff !important;
          padding: 0px;
          margin: 0;
          overflow: auto;
        }

        .swagger-ui .info h2.title {
          font-size: 1.9rem;
        }

        .swagger-section .swagger-ui .wrapper section.models {
          background-color: #fff;
        }

        @media only screen and (min-width: 1px) and (max-width: 600px) {
          .swagger-section {
            padding: 10px 0px;
          }
        }
      `}</style>
    </div>
  );
};

export default SwaggerUIWrapper;
