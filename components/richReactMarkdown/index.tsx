import React, { PropsWithChildren } from 'react';
import Markdown from 'markdown-to-jsx';

import IsFranceConnected from '../isFranceConnected';

import { ButtonLink, ExternalLink } from '../../uiComponents';
import Quote from '../../uiComponents/quote';

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
      <b>Pour remplir votre demande, vous aurez besoin : </b>
    </p>
    <ul>
      <li>de votre numéro SIRET</li>
      <li>du cadre juridique</li>
      <li>
        de la description du service justifiant une simplication pour les
        citoyens
      </li>
      <li>des coordonnées de l'équipe</li>
      <li>
        des coordonnées de votre délégué à la protection des données et
        responsable de traitement
        {is_editeur && <b> de l’entité pour laquelle vous opérez</b>}
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
        IsFranceConnected: IsFranceConnected,
        Quote: Quote,
      },
    }}
  />
);

export default RichReactMarkdown;
