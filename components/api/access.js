import React from "react";
import PropTypes from "prop-types";

import Section from "./section";

const Access = ({
  is_open,
  condition,
  description,
  link,
  clients
}) => {
  return (
    <Section id="access" title="Accès">
      {is_open ? (
        <p>L'API est ouverte sans conditions.</p>
      ) : (
        <>
        {description || condition || link ? (
          <>
            {description && (
              <div dangerouslySetInnerHTML={{ __html: description }} />
            )}

            {condition && condition === "OUVERT sous contrat" ? (
              <>
                <p>{condition} pour :</p>
                <ul>
                  {clients.map(client => (
                    <li key={client}>{client}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p>{condition}</p>
            )}

            {link && (
              <a className="large ui button" href={link}>
                <i className="icon key"></i>Demandez l'accès
              </a>
            )}
          </>
        ) : (
          <p>Accès à l'API non documenté</p>
        )}
        </>
      )}
    </Section>
  );
};

Access.defaultProps = {
  is_open: false,
  link: null,
  description: null,
  condition: null,
  clients: []
};

Access.propTypes = {
  is_open: PropTypes.bool,
  link: PropTypes.string,
  description: PropTypes.string,
  condition: PropTypes.string,
  clients: PropTypes.array
};

export default Access;
