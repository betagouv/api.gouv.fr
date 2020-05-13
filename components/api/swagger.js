import React from 'react';

class SwaggerUI extends React.Component {
  componentDidMount() {
    const SwaggerUi = require('swagger-ui');
    const { presets } = require('swagger-ui');

    SwaggerUi({
      dom_id: '#swagger-ui-container',
      url: this.props.url,
      presets: [presets.apis],
    });
  }
  render() {
    return (
      <div className="swagger-section">
        <div id="swagger-ui-container" className="swagger-ui-wrap"></div>

        <style jsx>{`
          .swagger-ui .topbar {
            display: none;
          }

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
  }
}

export default SwaggerUI;
