import React, { PropsWithChildren } from 'react';
import Markdown from 'markdown-to-jsx';

import {
  ButtonLink,
  ButtonCopy,
  ExternalLink,
  RichLink,
} from '../../uiComponents';
import Quote from '../../uiComponents/quote';
import TeamHelpWidget from '../teamHelpWidget';
import ApiSireneWidget from '../apiWidgets/apiSirene';
import DatagouvWidget from '../widgets/datagouv';
import FlatFileWidget from '../widgets/flatFile';
import { H2WithAnchor, H3WithAnchor } from '../../uiComponents/titleWithAnchor';
import QuestionTree from '../questionTree';

const CenteredCta: React.FC<PropsWithChildren<{ href: string; alt: boolean }>> =
  props => (
    <div className="layout-center">
      <ButtonLink href={props.href} size="large" alt={props.alt}>
        {props.children}
      </ButtonLink>
      <style jsx>{`
        .layout-center {
          padding: 10px 0;
        }
      `}</style>
    </div>
  );

const Centered: React.FC<PropsWithChildren<{}>> = props => (
  <div className="layout-center">{props.children}</div>
);

const Grid: React.FC<PropsWithChildren<{}>> = props => (
  <div className="default-grid">{props.children}</div>
);

const NextSteps = ({
  is_editeur = false,
  service_description = `de la description du service justifiant une simplification pour les usagers`,
}) => (
  <>
    <p>
      <b>Pour remplir votre demande, vous aurez besoin : </b>
    </p>
    <ul>
      <li>de votre numéro SIRET</li>
      <li>{service_description}</li>
      <li>du cadre juridique</li>
      <li>des coordonnées de l'équipe</li>
      <li>
        des coordonnées de votre délégué à la protection des données et
        responsable de traitement
        {is_editeur && <b> de l’entité pour laquelle vous opérez</b>}
      </li>
    </ul>
  </>
);

const RichReactMarkdown: React.FC<{ source: string; addAnchor?: boolean }> = ({
  source,
}) => (
  <Markdown
    children={source}
    options={{
      overrides: {
        Button: CenteredCta,
        ButtonCopy: ButtonCopy,
        NextSteps: NextSteps,
        External: ExternalLink,
        Quote: Quote,
        RichLink: RichLink,
        Grid: Grid,
        Centered: Centered,
        ContactUs: TeamHelpWidget,
        FlatFile: FlatFileWidget,
        ApiSireneWidget: ApiSireneWidget,
        Datagouv: DatagouvWidget,
        h2: H2WithAnchor,
        h3: H3WithAnchor,
        QuestionTree: QuestionTree,
      },
    }}
  />
);

export default RichReactMarkdown;
