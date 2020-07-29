import React from 'react';

import { ButtonLink } from '../../uiComponents/button';

import { logDemanderAcces } from '../../utils/client/analytics';
import SubSection from './subSection';

interface IAccessProps {
  is_open: boolean | number;
  slug: string;
  doc_external_link?: string;
  access_link?: string;
}

const ApiAccess: React.FC<IAccessProps> = ({
  is_open,
  slug,
  doc_external_link,
  access_link = '',
}) => {
  let accessDescription = '';
  let accessHref = '';
  let accessLabel = <></>;
  let ext = false; // external link ?

  switch (is_open) {
    case 1:
    case true:
      accessDescription =
        'L’API est ouverte à tous. Vous pouvez y accéder dès maintenant :';
      accessHref = doc_external_link
        ? doc_external_link
        : `/documentation/${slug}`;
      accessLabel = (
        <>
          {' '}
          <span role="img" aria-label="émoji code">
            👩‍💻
          </span>{' '}
          {doc_external_link ? ' Accéder au site de l’API' : 'Tester l’API'}
        </>
      );
      break;
    case 0:
      accessDescription =
        'L’API nécessite de se créer un compte avant de pouvoir accèder aux données :';
      accessHref = access_link;
      accessLabel = (
        <>
          <span role="img" aria-label="émoji compte">
            👤
          </span>{' '}
          Se créer un compte
        </>
      );
      ext = true;
      break;
    case -1:
    case false:
      accessDescription = 'L’API nécessite une habilitation :';
      accessHref = `/les-api/${slug}/demande-acces`;
      accessLabel = (
        <>
          <span role="img" aria-label="émoji clef">
            🔑
          </span>{' '}
          Faire une demande d’accès
        </>
      );
      break;
    default:
      throw new Error('is_open should be 0, -1 or 1');
  }

  return (
    <>
      <div>{accessDescription}</div>
      <div className="layout-right vertical-margin">
        <ButtonLink
          href={accessHref}
          onClick={logDemanderAcces}
          large
          target={ext ? '_blank' : ''}
          rel={ext ? 'noreferrer noopener' : ''}
        >
          {accessLabel}
        </ButtonLink>
      </div>
    </>
  );
};

const Access: React.FC<IAccessProps> = ({
  is_open,
  slug,
  doc_external_link = '',
  access_link = '',
}) => {
  return (
    <SubSection title="Accéder aux données">
      <ApiAccess
        slug={slug}
        is_open={is_open}
        doc_external_link={doc_external_link}
        access_link={access_link}
      />
    </SubSection>
  );
};

export default Access;
