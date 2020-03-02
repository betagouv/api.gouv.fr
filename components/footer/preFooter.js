import React from 'react';

import constants from '../../constants';
import { ButtonLink } from '../../uiComponents/button';
import './preFooterStyles.scss';

const PreFooter = ({ background }) => (
  <section
    id="pre-footer"
    style={{ bacgroundColor: background ? background : '#fff' }}
  >
    <div className="content-container links">
      <div>
        <h3>Vous ne trouvez pas l’API dont vous avez besoin ?</h3>
        <ButtonLink href={constants.links.mailto.REQUEST_API}>
          Demander une API
        </ButtonLink>
      </div>
      <div>
        <h3>Vous voulez partager une API ?</h3>
        <ButtonLink href={constants.links.ADD_API} alt>
          Partager votre API
        </ButtonLink>
      </div>
    </div>
  </section>
);

export default PreFooter;
