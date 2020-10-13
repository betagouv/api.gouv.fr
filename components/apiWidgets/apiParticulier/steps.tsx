import React from 'react';
import { StepSection } from './components';
import { ButtonLink } from '../../../uiComponents/button';

interface IPropsStep {
  next: () => void;
}
export const Connect: React.FC<IPropsStep> = ({ next }) => {
  const submit = (e: any) => {
    e.preventDefault();
    next();
  };
  return (
    <StepSection title="Connexion">
      <form onSubmit={submit}>
        <label htmlFor="eamil">Email</label>
        <input id="email" defaultValue="raymond.holt@yopmail.fr" type="email" />
        <label htmlFor="password">Mot de passe</label>
        <input id="password" defaultValue="abcde" type="password" />
        <div className="layout-center">
          <ButtonLink type="submit" size="large">
            Se connecter
          </ButtonLink>
        </div>
      </form>
    </StepSection>
  );
};

export const GetRFR: React.FC<IPropsStep> = ({ next }) => {
  const submit = (e: any) => {
    e.preventDefault();
    next();
  };
  return (
    <StepSection title="Obtenir mon revenu fiscal de référence">
      <form onSubmit={submit}>
        <label htmlFor="numero-fiscal">Numéro fiscal</label>
        <input id="numero-fiscal" defaultValue="1902599999001" type="number" />
        <label htmlFor="reference-avis-impot">
          Référence d’avis d’imposition
        </label>
        <input
          id="reference-avis-impot"
          defaultValue="1902599999001"
          type="number"
        />
        <div className="layout-center">
          <ButtonLink type="submit" size="large">
            Récupérer mon RFR
          </ButtonLink>
        </div>
      </form>
    </StepSection>
  );
};

export const RecapRFR = () => (
  <StepSection title="Mon revenu fiscal de référence">
    <p>
      Votre revenu fiscal de référence est{' '}
      <b>
        {new Intl.NumberFormat('fr-FR', {
          style: 'currency',
          currency: 'EUR',
        }).format(26922)}
      </b>
    </p>
  </StepSection>
);
