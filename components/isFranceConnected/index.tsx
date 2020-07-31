import React, { useState } from 'react';
import { MultiChoice, ButtonLink } from '../../uiComponents';
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
