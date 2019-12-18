import React from "react";
import PropTypes from "prop-types";

import Section from "./section";

const Access = ({
  access_open,
  access_link,
  access_description,
  contract,
  clients
}) => {
  return (
    <Section id="access" title="Accès">
      {access_open ? (
        <p>L'API est ouverte sans conditions.</p>
      ) : access_link ? (
        <>
          {access_description && (
            <div dangerouslySetInnerHTML={{ __html: access_description }} />
          )}

          {contract && contract === "OUVERT sous contrat" ? (
            <>
              <p>{contract} pour :</p>
              <ul>
                {clients.map(client => (
                  <li key={client}>{client}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>{contract}</p>
          )}
          <a className="large ui button" href={access_link}>
            <i className="icon key"></i>Demandez l'accès
          </a>
        </>
      ) : (
        <p>Accès à l'API non documenté</p>
      )}
    </Section>
  );
};

Access.defaultProps = {
  access_open: false,
  access_link: null,
  access_description: null,
  contract: null,
  clients: []
};

Access.propTypes = {
  access_open: PropTypes.bool,
  access_link: PropTypes.string,
  access_description: PropTypes.string,
  contract: PropTypes.string,
  clients: PropTypes.array
};

export default Access;
