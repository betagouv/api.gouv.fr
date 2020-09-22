import React, { useState } from 'react';
import { MultiChoice, ButtonLink, ExternalLink } from '../../uiComponents';
import Loader from '../../uiComponents/loader';

interface IPropsFC {
  fcLink: string;
  notFcLink: string;
}

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

      {!!link && isLoading ? (
        <div className="layout-center">
          <Loader />
        </div>
      ) : (
        <>
          <p>
            En remplissant cette demande, vous allez obtenir l’accès à l'API
            Impôt Particulier. Afin d'accéder aux données il est également
            nécessaire de faire une demande d’accès{' '}
            <ExternalLink href="/les-api/api-r2p">l'API R2P</ExternalLink> afin
            d'obtenir l'identifiant fiscal.
          </p>
          <div className="layout-center">
            <ButtonLink href={link} size="large">
              Remplir une demande
            </ButtonLink>
          </div>
        </>
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
