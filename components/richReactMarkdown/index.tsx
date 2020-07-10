import React, { useState, PropsWithChildren } from 'react';
import Markdown from 'markdown-to-jsx';

import { ButtonLink, ExternalLink, MultiChoice } from '../../uiComponents';

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
      <li>le cadre juridique, en l'occurence</li>
      <li>
        la description du service justifiant une simplication pour les citoyens
      </li>
      <li>les coordonnées de l'équipe</li>
      <li>
        les coordonnées de votre délégué à la protection des données{' '}
        {is_editeur && <b>de l’entité pour laquelle vous opérez</b>}
      </li>
    </ul>
  </>
);

const IsFranceConnected = ({ fcLink, notFcLink }) => {
  const [hasAlreadyFranceConnect, setHasFc] = useState<Boolean | null>(null);
  const [wantFranceConnect, setWantFc] = useState<Boolean | null>(null);
  const [link, setLink] = useState(null);

  const yesNoOptions = [
    { label: 'Oui', value: true },
    { label: 'Non', value: false },
  ];

  const hasFc = (answer: boolean) => {
    setHasFc(answer);
    if (answer) {
      setLink(fcLink);
    }
  };

  const wantFc = (answer: boolean) => {
    setWantFc(answer);
    setLink(answer ? fcLink : notFcLink);
  };
  return (
    <>
      <div className="question">
        <div>
          <b>Avez-vous déjà un accès au bouton FranceConnect ?</b>
        </div>
        <MultiChoice
          multiChoiceOptions={yesNoOptions}
          onClick={hasFc}
          selected={hasAlreadyFranceConnect}
        />
      </div>

      {hasAlreadyFranceConnect === false && (
        <div className="question">
          <div>
            <b>Souhaitez-vous un bouton FranceConnect sur votre service ?</b>
          </div>
          <MultiChoice
            multiChoiceOptions={yesNoOptions}
            onClick={wantFc}
            selected={wantFranceConnect}
          />
        </div>
      )}

      {link && (
        <div className="layout-center">
          <ButtonLink href={link} large>
            Remplir une demande
          </ButtonLink>
        </div>
      )}
      <style jsx>{`
        .question {
          margin: 40px auto;
        }
      `}</style>
    </>
  );
};

const RichReactMarkdown: React.FC<{ source: string }> = ({ source }) => (
  <Markdown
    children={source}
    options={{
      overrides: {
        Button: CenteredCta,
        NextSteps: NextSteps,
        External: ExternalLink,
        IsFranceConnected: IsFranceConnected,
      },
    }}
  />
);

export default RichReactMarkdown;
