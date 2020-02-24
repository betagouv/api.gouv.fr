import React from 'react';

import constants from '../const';
import { ButtonLink } from '../uiComponents/button';

const PreFooter = ({ background }) => (
  <section>
    <div className="content-container links">
      <div>
        <h3>Vous ne trouvez pas l’API dont vous avez besoin ?</h3>
        <ButtonLink href={constants.mailto.REQUEST_API_MAILTO_LINK}>
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
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
      }
      section > div > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      @media (max-width: 768px) {
        section > div {
          flex-direction: column;
        }
        section > div > div {
          margin: 20px 0;
        }
      }
    `}</style>
  </section>
);

export default PreFooter;
