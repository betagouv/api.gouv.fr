import React from 'react';
import { shuffle } from 'lodash';

import ApiCard from '../searchApis/apiCard';
import { ButtonLink } from '../../uiComponents';
import constants from '../../constants';

const ApiTripletSection = ({ apiList }) => {
  const selectApis = shuffle(apiList).slice(0, 3);
  return (
    <section id="api-triplet">
      <div className="content-container">
        <h3>Découvrez des APIs du service public&nbsp;:</h3>
        <div className="ui three stackable cards">
          {selectApis.map(api => (
            <ApiCard key={api.title} {...api} />
          ))}
        </div>
      </div>
      <div className="layout-center">
        <ButtonLink href="rechercher-api" large alt>
          Voir toutes les APIs ☞
        </ButtonLink>
      </div>
      <style jsx>{`
        section#api-triplet {
          background: ${constants.colors.backgroundBlueGradient};
          padding: 50px 0;
        }

        section#api-triplet h3 {
          color: #fff;
          font-weight: 400;
          padding-bottom: 10px;
        }
        section > div:last-child {
          padding: 40px 0 0;
        }
      `}</style>
    </section>
  );
};
export default ApiTripletSection;
