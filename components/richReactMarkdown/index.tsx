import React, { PropsWithChildren } from 'react';
import Markdown from 'markdown-to-jsx';

import { ButtonLink, ExternalLink } from '../../uiComponents';

const CenteredCta: React.FC<PropsWithChildren<{ href: string }>> = props => (
  <div className="layout-center">
    <ButtonLink href={props.href} large>
      {props.children}
    </ButtonLink>
  </div>
);

const NextSteps = ({ is_editeur = false }) => (
  <>
    <p>
      <b>Pour remplir votre demande, vous aurez besoin de : </b>
    </p>
    <ul>
      <li>votre numéro SIRET</li>
      <li>le cadre juridique</li>
      <li>
        la description du service justifiant une simplication pour les citoyens
      </li>
      <li>les coordonnées de l'équipe</li>
      <li>
        les coordonnées de votre délégué à la protection des données et
        responsable de traitement
        {is_editeur && <b>de l’entité pour laquelle vous opérez</b>}
      </li>
    </ul>
  </>
);

const RichReactMarkdown: React.FC<{ source: string }> = ({ source }) => (
  <Markdown
    children={source}
    options={{
      overrides: {
        Button: CenteredCta,
        NextSteps: NextSteps,
        External: ExternalLink,
      },
    }}
  />
);

export default RichReactMarkdown;
