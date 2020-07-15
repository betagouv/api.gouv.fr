import React from 'react';

import Page from '../../layouts';
import GeoWidget from '../../components/apiWidgets/apiGeo';
import ApiParticulierWidget from '../../components/apiWidgets/apiParticulier';

const APITypes: React.FC<{}> = () => {
  return (
    <Page
      title={`Quelles sont les différents tpyes d’APIs au sein du service public ?`}
      description={`Découvrez les APIs en accès libre, les APIs en accès restreint et les APIs FranceConnectées.`}
    >
      <div className="text-wrapper text-style">
        <h2>Les APIs en Open data</h2>
        <p>Intro sur l'open data tout ca</p>
        <h3>Quelle différence avec API Gouv et Data Gouv ?</h3>
        <h3>Un exemple bien concret pour mettre tout le monde d'accord</h3>
        <GeoWidget />
        <ApiParticulierWidget />
      </div>
      <style jsx>{``}</style>
    </Page>
  );
};

export default APITypes;
