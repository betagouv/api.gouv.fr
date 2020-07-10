import React from 'react';

import Section from './section';
import { ButtonLink } from '../../uiComponents/button';

import { logDemanderAcces } from '../../service/analytics';

const ApiOpen = ({ link }) => (
  <>
    <p>L'API est ouverte à tous.</p>
    <p>
      Pour accéder aux données, consultez la{' '}
      <a href="#doc_tech">documentation </a>
      {link && (
        <>
          ou le <a href={link}>site internet</a>
        </>
      )}
    </p>
  </>
);

const ApiNotOpen = ({ link, description, condition, clients }) => (
  <div className="highlight-info">
    {description && <div dangerouslySetInnerHTML={{ __html: description }} />}

    {condition && condition === 'OUVERT sous contrat' ? (
      <div>
        <p>
          L’API nécessite une habilitation, son accès est restreint aux entités
          suivantes :
        </p>
        <ul>
          {clients.map(client => (
            <li key={client} dangerouslySetInnerHTML={{ __html: client }} />
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
);

const Access = ({ is_open, link, description, condition, clients }) => {
  return (
    <Section id="access" title="Conditions d’accès">
      {is_open ? (
        <ApiOpen link={link} />
      ) : link ? (
        <ApiNotOpen
          link={link}
          description={description}
          condition={condition}
          clients={clients}
        />
      ) : (
        <p>Accès à l'API non documenté</p>
      )}
    </Section>
  );
};

export default Access;
