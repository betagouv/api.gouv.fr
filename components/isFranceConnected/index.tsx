import React, { useState } from 'react';
import { MultiChoice, ButtonLink } from '../../uiComponents';
import Loader from '../../uiComponents/loader';

interface IPropsFC {
  fcLink: string;
  notFcLink: string;
}

const FcSellingPoints = () => (
  <div>
    <div>Ajouter un bouton FranceConnect sur votre service permet :</div>
    <ul>
      <li>
        de simplifier le parcours des usagers qui peuvent utiliser le même
        identifiant partout
      </li>
      <li>
        de sécuriser votre service car FranceConnect gère la réconciliation des
        identités pour vous
      </li>
      <li>de réduire la fraude grace à l'identification unique des citoyens</li>
    </ul>
  </div>
);

const yesNoOptions = [
  { label: 'Oui', value: true },
  { label: 'Non', value: false },
];

const IsFranceConnected: React.FC<IPropsFC> = ({ fcLink, notFcLink }) => {
  const [hasAlreadyFranceConnect, setHasFc] = useState<Boolean | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [link, setLink] = useState('');

  const hasFc = (answer: boolean) => {
    setLink(answer ? fcLink : notFcLink);
    setHasFc(answer);
    setIsLoading(true);
    window.setTimeout(() => setIsLoading(false), 700);
  };

  return (
    <>
      <div className="question">
        <div>
          <b>
            Utilisez-vous ou comptez-vous utiliser FranceConnect sur votre
            service ?
          </b>
        </div>
        <MultiChoice
          multiChoiceOptions={yesNoOptions}
          onClick={hasFc}
          selected={hasAlreadyFranceConnect}
        />
      </div>

      {!!link && (
        <div className="layout-center">
          {isLoading ? (
            <Loader />
          ) : (
            <ButtonLink href={link} large>
              Remplir une demande
            </ButtonLink>
          )}
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

export default IsFranceConnected;
