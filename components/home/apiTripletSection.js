import React from 'react';

import ApiCard from '../searchApis/apiCard';
import { ButtonLink } from '../../uiComponents';

const ApiTripletSection = ({ apiList }) => {
  return (
    <section id="api-triplet">
      <div className="content-container">
        <h3>Découvrez des APIs du service public&nbsp;:</h3>
        <div className="default-grid">
          {apiList.map(api => (
            <ApiCard key={api.title} {...api} />
          ))}
        </div>
      </div>
      <div className="layout-center">
        <ButtonLink href="rechercher-api" large alt>
          Voir toutes les APIs ☞
        </ButtonLink>
      </div>
    </section>
  );
};
export default ApiTripletSection;
