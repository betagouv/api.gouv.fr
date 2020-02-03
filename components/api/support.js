import React from "react";
import PropTypes from "prop-types";

import Section from "./section";

const Support = ({ link }) => {
  return (
    <Section id="contact" title="Support">
      <>
        {link ? (
          <>
            {link.includes("@") ? (
              <>
                <p>Vous pouvez contacter le support de cette API par mail. .</p>
                <a
                  className="large ui button"
                  href={`mailto:${link}?subject=Contact%20via%20api.gouv.fr`}
                >
                  <i className="icon mail"></i> Envoyer un mail à {link}
                </a>
              </>
            ) : (
              <>
                <p>
                  Vous pouvez contacter le support de cette API en utilisant un
                  formulaire.
                </p>
                <a
                  className="large ui button"
                  href={link}
                  target="_blank"
                  rel="noopener"
                >
                  <i className="icon linkify"></i> Accéder au formulaire de
                  contact
                </a>
              </>
            )}
          </>
        ) : (
          <p>Le contact de cette API n'est pas disponible publiquement.</p>
        )}
      </>
    </Section>
  );
};

Support.defaultProps = {
  link: null
};

Support.propTypes = {
  link: PropTypes.string
};

export default Support;
