import constants from '../../constants';
import { ButtonLink } from '../../uiComponents/button';
import { logCTA } from '../../utils/client/analytics';

const PreFooter = ({ background }) => (
  <section
    id="pre-footer"
    style={{
      backgroundColor: background || constants.colors.lightestGrey,
    }}
  >
    <div className="fr-container links">
      <div>
        <p>Vous ne trouvez pas l’API dont vous avez besoin ?</p>
        <ButtonLink
          href="/parcours-client?source=preFooter"
          onClick={() => logCTA('CTA pre-footer')}
        >
          Nous contacter
        </ButtonLink>
      </div>
      <div>
        <p>Vous voulez partager une API ?</p>
        <ButtonLink href="https://guides.data.gouv.fr/guide-data.gouv.fr/api/publier-une-api" alt>
          Partager votre API
        </ButtonLink>
      </div>
    </div>
  </section>
);

export default PreFooter;
