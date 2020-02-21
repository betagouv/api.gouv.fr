import React from 'react';

import ApiCard from '../searchApis/apiCard';
import colors from '../../styles/colors';
import { ButtonLink } from '../../uiComponents';

const ApiTripletSection = ({ apiList }) => (
  <section id="apis">
    <div className="content-container">
      <h3>Découvrez des APIs du service public :</h3>
      <div className="ui three stackable cards">
        {apiList
          .sort((a, b) => (a.visits_2019 > b.visits_2019 ? -1 : 1))
          .slice(0, 3)
          .map(api => (
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
      section#apis {
        background-color: ${colors.darkBlue};
        padding: 50px 0;
      }

      section#apis h3 {
        color: #fff;
        font-weight: 400;
      }
      section > div:last-child {
        padding: 40px 0 0;
      }
    `}</style>
  </section>
);

export default ApiTripletSection;
