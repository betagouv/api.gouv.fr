import React from 'react';

import ApiCard from '../searchApis/apiCard';
import { ButtonLink } from '../../uiComponents';

const ApiTripletSection = ({ apiList }) => {
  return (
    <section id="api-triplet">
      <div className="fr-container">
        <h3>Découvrez des API du service public&nbsp;:</h3>
        <div className="default-grid">
          {apiList.map(api => (
            <ApiCard key={api.title} {...api} />
          ))}
        </div>
      </div>
      <div className="layout-center">
        <div style={{ backgroundColor: 'white' }}>
          <ButtonLink href="rechercher-api" size="large" alt>
            Voir toutes les API ☞
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
export default ApiTripletSection;
