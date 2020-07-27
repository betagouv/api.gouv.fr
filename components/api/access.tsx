import React from 'react';

import { ButtonLink } from '../../uiComponents/button';

import { logDemanderAcces } from '../../service/analytics';
import SubSection from './subSection';

interface IProps {
  slug: string;
  doc_external_link?: string;
}

const ApiOpen: React.FC<IProps> = ({ slug, doc_external_link = '' }) => (
  <>
    <div>L'API est ouverte à tous.</div>
    <p>Vous pouvez y accéder dès maintenant :</p>
    <div className="layout-right vertical-margin">
      <ButtonLink
        href={doc_external_link ? doc_external_link : `/documentation/${slug}`}
        onClick={logDemanderAcces}
        large
      >
        {doc_external_link ? ' Accéder au site de l’API' : 'Tester l’API'}
      </ButtonLink>
    </div>
  </>
);

const ApiNotOpen: React.FC<IProps> = ({ slug }) => (
  <div>
    <div>L’API nécessite une habilitation :</div>
    <div className="layout-right vertical-margin">
      <ButtonLink
        href={`/les-api/${slug}/demande-acces`}
        onClick={logDemanderAcces}
        large
      >
        <span role="img" aria-label="émoji clef">
          🔑
        </span>{' '}
        Faire une demande d’accès
      </ButtonLink>
    </div>
  </div>
);

interface IAccessProps {
  is_open: Boolean;
  slug: string;
  doc_external_link?: string;
}

const Access: React.FC<IAccessProps> = ({
  is_open,
  slug,
  doc_external_link = '',
}) => {
  return (
    <SubSection title="Accéder aux données">
      {is_open ? (
        <ApiOpen slug={slug} doc_external_link={doc_external_link} />
      ) : (
        <ApiNotOpen slug={slug} />
      )}
    </SubSection>
  );
};

export default Access;
