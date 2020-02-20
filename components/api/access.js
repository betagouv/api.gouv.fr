import React from 'react';
import PropTypes from 'prop-types';

import Section from './section';
import { ButtonLink } from '../../uiComponents/button';

import colors from '../../styles/colors';

const Access = ({
  access_open,
  access_link,
  access_description,
  contract,
  clients,
}) => {
  return (
    <Section id="access" title="Accès">
      {access_open ? (
        <p>L'API est ouverte à tous.</p>
      ) : access_link ? (
        <div className="get-access">
          {access_description && (
            <div dangerouslySetInnerHTML={{ __html: access_description }} />
          )}

          {contract && contract === 'OUVERT sous contrat' ? (
            <div>
              <p>
                L’API nécessite une habilitation, son accès est restreint aux
                entités suivantes :
              </p>
              <ul>
                {clients.map(client => (
                  <li
                    key={client}
                    dangerouslySetInnerHTML={{ __html: client }}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <p>{contract}</p>
          )}
          <ButtonLink href={access_link} large>
            <i className="icon key"></i>Demandez l'accès
          </ButtonLink>
        </div>
      ) : (
        <p>Accès à l'API non documenté</p>
      )}
      <style jsx>{`
        .get-access {
          border-left: 5px solid ${colors.blue};
          background-color: ${colors.lightBlue};
          color: ${colors.blue};
          padding: 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .get-access > div {
          width: 100%;
          margin-bottom: 10px;
        }
      `}</style>
    </Section>
  );
};

Access.defaultProps = {
  access_open: false,
  access_link: null,
  access_description: null,
  contract: null,
  clients: [],
};

Access.propTypes = {
  access_open: PropTypes.bool,
  access_link: PropTypes.string,
  access_description: PropTypes.string,
  contract: PropTypes.string,
  clients: PropTypes.array,
};

export default Access;
