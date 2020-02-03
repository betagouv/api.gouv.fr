import React from "react";
import PropTypes from "prop-types";

import Section from "./section";
import SwaggerUI from "./swagger";

const TechnicalDocumentation = ({
  link,
  external
}) => {
  return (
    <Section id="doc_tech" title="Documentation technique">
      <>
        {link ? (
          <SwaggerUI url={link} />
        ) : (
          <p>
            Vous pouvez retrouver la documentation technique sur{" "}
            <a href={external} rel="noopener" target="_blank">
              le site de l'API
            </a>
          </p>
        )}
      </>
    </Section>
  );
};

TechnicalDocumentation.defaultProps = {
  link: null,
  external: null
};

TechnicalDocumentation.propTypes = {
  link: PropTypes.string,
  external: PropTypes.string
};

export default TechnicalDocumentation;
