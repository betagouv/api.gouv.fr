import React from 'react';
import PropTypes from 'prop-types';

import Section from './section';
import { ButtonLink } from '../../uiComponents/button';

import { logDemanderAcces } from '../../service/analytics';

const Access = ({ is_open, link, description, condition, clients }) => {
  return (
    <Section id="access" title="Conditions d’accès">
      {is_open ? (
        <>
          <p>L'API est ouverte à tous.</p>
          <p>
            Pour accèder aux données, consultez la{' '}
            <a href="#doc_tech">documentation </a>
            {link ? (
              <>
                ou le <a href={link}>site internet</a>
              </>
            ) : (
              ''
            )}
          </p>
        </>
      ) : link ? (
        <div className="highlight-info">
          {description && (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          )}

          {condition && condition === 'OUVERT sous contrat' ? (
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
            <p>{condition}</p>
          )}
          <ButtonLink href={link} onClick={logDemanderAcces} large>
            <i className="icon key"></i>Demandez l'accès
          </ButtonLink>
        </div>
      ) : (
        <p>Accès à l'API non documenté</p>
      )}
    </Section>
  );
};

Access.defaultProps = {
  is_open: false,
  link: null,
  description: null,
  condition: null,
  clients: [],
};

Access.propTypes = {
  is_open: PropTypes.bool,
  link: PropTypes.string,
  description: PropTypes.string,
  condition: PropTypes.string,
  clients: PropTypes.array,
};

export default Access;
