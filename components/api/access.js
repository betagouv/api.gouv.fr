import React from 'react';
import PropTypes from 'prop-types';

import Section from './section';
import { ButtonLink } from '../../uiComponents/button';

import { logDemanderAcces } from '../../service/analytics';

const SIGNUP_URL = process.env.SIGNUP_URL || 'https://signup.api.gouv.fr';

/**
 * turns any link that match signup.api.gouv.fr/XYZ into $SIGNUP_URL/XYZ,
 * Used in staging
 */
const formatSignupLink = (link = '') => {
  const signup_url_parts =
    link.match(/^https?:\/\/signup.api.gouv.fr(.*)/) || [];
  if (signup_url_parts.length === 2) {
    return `${SIGNUP_URL}${signup_url_parts[1]}`;
  }
  return link;
};

const Access = ({ is_open, link, description, condition, clients }) => {
  const fixed_link = formatSignupLink(link);
  return (
    <Section id="access" title="Conditions d’accès">
      {is_open ? (
        <>
          <p>L'API est ouverte à tous.</p>
          <p>
            Pour accéder aux données, consultez la{' '}
            <a href="#doc_tech">documentation </a>
            {link ? (
              <>
                ou le <a href={fixed_link}>site internet</a>
              </>
            ) : (
              ''
            )}
          </p>
        </>
      ) : fixed_link ? (
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
          <ButtonLink href={fixed_link} onClick={logDemanderAcces} large>
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
