import React from 'react';

import StepsCarousel from './components';

import ApiWidgetWrapper from '../apiWidgetWrapper';

const ApiParticulierWidget: React.FC<{}> = () => {
  return (
    <ApiWidgetWrapper title="Un exemple d’API à accès restreint : l’API Particulier">
      <div>
        Seules certains acteurs peuvent utiliser l’API particulier pour
        construire leur service
        <br />
        <br />
        Elle permet par exemple aux collectivités de construire un service de
        calcul du quotient familial en renvoyant les données fiscales.
        <br />
        <br />
        Ces données étant <b>sensibles</b> la procédure commence par l’
        <b>authentification du citoyen</b>.
      </div>
      <ol>
        <li>Vous vous connectez au service</li>
        <li>Vous renseignez votre numéro fiscal</li>
        <li>Vous renseignez votre référence d'avis d'imposition</li>
        <li>L’API Particulier nous renvoie votre revenu fiscal de référence</li>
        <li>Nous affichons les résultats</li>
      </ol>
      <div className="interactive-component">
        <StepsCarousel />
      </div>
    </ApiWidgetWrapper>
  );
};

export default ApiParticulierWidget;
