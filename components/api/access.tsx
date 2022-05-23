import React from 'react';

import { ButtonLink } from '../../uiComponents/button';

import { logDemanderAcces } from '../../utils/client/analytics';
import SubSection from './subSection';
import { IIsApiOpen } from '../../model';
import Emoji from '../../uiComponents/emoji';

interface IAccessProps {
  is_open: IIsApiOpen;
  slug: string;
  doc_external_link?: string;
  doc_swagger_link?: string;
  account_link?: string;
}

const DESCRIPTIONS = {
  open: 'L’API est ouverte à tous. Vous pouvez y accéder dès maintenant :',
  account:
    '⚠️ Attention ! Cette API nécessite de se créer un compte afin d’accéder aux données :',
  closed: 'L’API nécessite une habilitation :',
};

const AccessButton = ({ emoji = '', emojiLabel = '', label = '' }) => (
  <>
    <Emoji emoji={emoji} label={emojiLabel} />
    {label}
  </>
);

const Access: React.FC<IAccessProps> = ({
  is_open,
  slug,
  doc_external_link = '',
  doc_swagger_link = '',
  account_link = '',
}) => {
  let accessDescription = '';
  let accessHref = '';
  let accessLabel = <></>;
  let ext = false; // external link ?

  if (!doc_swagger_link && !doc_external_link) {
    throw new Error(
      `API ${slug} should have either an external or an internal documentation.`
    );
  }

  switch (is_open) {
    case 1:
      accessDescription = DESCRIPTIONS.open;
      accessHref = doc_swagger_link
        ? `/documentation/${slug}`
        : doc_external_link;
      accessLabel = (
        <AccessButton
          emoji="👩‍💻"
          emojiLabel="code"
          label={doc_swagger_link ? 'Tester l’API' : 'Accéder au site de l’API'}
        />
      );
      break;
    case 0:
      accessDescription = DESCRIPTIONS.account;
      accessHref = account_link;
      accessLabel = (
        <AccessButton
          emoji="↗️"
          emojiLabel="attention"
          label="Se créer un compte"
        />
      );
      ext = true;
      break;
    case -1:
      accessDescription = DESCRIPTIONS.closed;
      accessHref = `/les-api/${slug}/demande-acces`;
      accessLabel = (
        <AccessButton
          emoji="🔑"
          emojiLabel="clef"
          label="Faire une demande d’habilitation"
        />
      );
      break;
    default:
      throw new Error('is_open should be 0, -1 or 1');
  }

  return (
    <SubSection title="Accéder aux données">
      <div>{accessDescription}</div>
      <div className="layout-right vertical-margin">
        <ButtonLink
          href={accessHref}
          onClick={logDemanderAcces}
          target={ext ? '_blank' : ''}
          rel={ext ? 'noreferrer noopener' : ''}
        >
          {accessLabel}
        </ButtonLink>
      </div>
    </SubSection>
  );
};

export default Access;
