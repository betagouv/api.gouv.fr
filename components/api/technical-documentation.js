import React from "react";
import PropTypes from "prop-types";

import Section from "./section";
import SwaggerUI from "./swagger";

const TechnicalDocumentation = ({
  doc_tech_description,
  doc_tech_link,
  doc_tech_external
}) => {
  return (
    <Section id="doc_tech" title="Documentation technique">
      <>
        {doc_tech_description && (
          <div dangerouslySetInnerHTML={{ __html: doc_tech_description }} />
        )}

        {doc_tech_link ? (
          <SwaggerUI url={doc_tech_link} />
        ) : (
          <p>
            Vous pouvez retrouver la documentation technique sur{" "}
            <a href={doc_tech_external} rel="noopener" target="_blank">
              le site de l'API
            </a>
          </p>
        )}
      </>
    </Section>
  );
};

TechnicalDocumentation.defaultProps = {
  doc_tech_description: null,
  doc_tech_link: null,
  doc_tech_external: null
};

TechnicalDocumentation.propTypes = {
  doc_tech_description: PropTypes.string,
  doc_tech_link: PropTypes.string,
  doc_tech_external: PropTypes.string
};

export default TechnicalDocumentation;
