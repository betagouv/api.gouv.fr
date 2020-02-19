import React from 'react';

import constants from '../const';
import colors from '../styles/colors';
import ButtonLink from '../components/ui/button-link';

const PreFooter = ({ background }) => (
  <section>
    <div className="ui container links">
      <div>
        <h3>Vous ne trouvez pas l’API dont vous avez besoin ?</h3>
        <ButtonLink href={constants.REQUEST_API_MAILTO_LINK}>
          Demander une API
        </ButtonLink>
      </div>
      <div>
        <h3>Vous voulez partager une API ?</h3>
        <ButtonLink href={constants.ADD_API_LINK} alt>
          Partager votre API
        </ButtonLink>
      </div>
    </div>

    <style jsx>{`
      section {
        background-color: ${background ? background : '#fff'};
      }
      section > div {
        padding: 4rem 0;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }
      section > div > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </section>
);

export default PreFooter;
