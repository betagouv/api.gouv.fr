import rightArrow from '../../../uiComponents/icon/rightArrow';
import file from '../../../uiComponents/icon/file';
import { ButtonLink } from '../../../uiComponents';

export const nonEligible =
  <>
    <p><strong>Vous n'êtes pas éligible à API Entreprise</strong> <span role="img" aria-label="émoji non">🚫</span></p>
    <p>L’usage des données de l’API Entreprise est reservé aux acteurs publics : les administrations, leurs opérateurs et les collectivités, les acteurs de santé, etc.</p>
    <p>D’autres API, publiques, permettent d’accéder à des données sur les entreprises et les associations :</p>
    <ul className='list-links'>
      <li><a className='outside-link'>API Sirene {rightArrow}</a></li>
      <li><a className='outside-link'>API Registre National du Commerce et des Sociétés {rightArrow}</a></li>
      <li><a className='outside-link'>API Répertoire National des associations {rightArrow}</a></li>
      <li><a className='outside-link'>API Répertoire National des métiers {rightArrow}</a></li>
      <li><a className='outside-link'>Rechercher une autre API {rightArrow}</a></li>
    </ul>
  </>;

export const eligible =
  <>
    <p><strong>Vous êtes éligible !</strong> <span role="img" aria-label="émoji oui">👌</span> Lors de la demande, vous devrez justifier par le cadre légal adéquat de votre statut de société chargée d’une mission de service public.</p>
  </>

export const eligibleEditeurOk =
  <>
    <p><strong><span role="img" aria-label="émoji ok">✅</span> Bonne nouvelle ! Vous êtes éligible et votre éditeur ou profil acheteur a déjà intégré l’API Entreprise.</strong>
    </p>
    <p>
      <strong>Vous n’avez plus qu’à vous adresser directement à votre éditeur.</strong><br/>Ce dernier vous transmettra un lien vers le formulaire adéquat, prérempli, votre demande sera alors très rapidement validée.
    </p>
  </>

export const eligibleEditeurNotOk =
  <>
    <p><strong>Vous êtes éligible mais votre éditeur/profil acheteur n’a pas intégré l’API Entreprise<span role="img" aria-label="émoji loupe">🔎</span></strong><br/>Déposez une demande pour expliciter vos besoins et votre situation. L’équipe API Entreprise vous contactera pour identifier des pistes de solutions, et contactera le cas échéant votre éditeur.
    </p>
    {/* TODO: Check link */}
    <ButtonLink href="https://datapass.api.gouv.fr/api-entreprise">Déposer une demande</ButtonLink>
    <p>
      <strong>Nota:</strong><br/>L’API Entreprise s’utilise au travers d’un logiciel métier, vous avez un éditeur qui vous met probablement à disposition un logiciel de ce type.
    </p>
    <p>
      En revanche, ce dernier n’a pas encore intégré l’API Entreprise.Les instructeurs de l’API Entreprise devront, entre autres, vérifier si votre éditeur a les prérequis techniques pour utiliser l’API Entreprise.
    </p>
  </>

export const eligibleDevelopersOk =
  <>
    <p>
      <strong><span role="img" aria-label="émoji ok">✅</span> Vous êtes éligible et avez les compétences techniques pour intégrer l’API Entreprise</strong> à votre logiciel interne de traitement des démarches des associations et des entreprises.
    </p>
    <div className='margin-top'><ButtonLink href="https://datapass.api.gouv.fr/api-entreprise">Déposer une demande</ButtonLink></div>
  </>

// TODO add link
export const eligibleNoDevelopers =
  <>
    <p><strong>Vous êtes éligible mais n'avez pas les <a href=''>prérequis techniques</a> pour utiliser l’API Entreprise<span role="img" aria-label="émoji loupe">🔎</span></strong></p>
    <p>
      L’API Entreprise s’utilise au travers d’un logiciel métier, comme par exemple un profil acheteur pour les marchés publics. Si vous collectez et traitez les données à la main, vous n’avez probablement pas un logiciel dédié aux démarches.
    </p>
    <div>
      <p>Vous pouvez:</p>
      <ul>
        <li>
          <strong>contacter des éditeurs de logiciel ayant déjà intégré l’API Entreprise</strong>, ou découvrir d’autres alternatives :
          <div className='margin-top'><a className='outside-link'>Liste des éditeurs branchés à l’API Entreprise {rightArrow}</a></div>
        </li>
        <li>
          <strong>déposer une demande afin de nous expliquer votre contexte d’utilisation et vos besoins.</strong>, Les instructeurs d’API Entreprise étudierons votre demande. L’identification d’une équipe technique sera indispensable pour délivrer une habilitation :
          <div className='margin-top'><ButtonLink href="https://datapass.api.gouv.fr/api-entreprise">Déposer une demande</ButtonLink></div>
        </li>
      </ul>
    </div>
  </>

export const editeurOk =
  <>
    <p><strong><span role="img" aria-label="émoji ok">✅</span> Vous êtes éligible pour mettre à disposition de vos utilisateurs l’API Entreprise.</strong></p>
    <p><span role="img" aria-label="émoji avertissement">⚠️</span>En tant que prestataire technique d’une entité administrative, vous pourrez être destinataire des informations techniques permettant l’usage de l’API mais en aucun cas des données elles-même</p>
    <div className='margin-top'><ButtonLink href="https://datapass.api.gouv.fr/api-entreprise">Déposer une demande</ButtonLink></div>
  </>

export const editeurAskAdministration =
  <>
    <p>L’administration pour laquelle vous proposez une prestation est éligible à l’API Entreprise <span role="img" aria-label="émoji ok">✅</span></p>
    <p><strong>C’est à elle de compléter une demande auprès d’API Entreprise.</strong> Elle devra dans sa demande d’habilitation vous renseigner en tant que “contact technique”. Le lien ci-dessous permet à l’administration d’accéder à la demande d’accès, partagez-lui :</p>
    <a href=''>Lien vers la page</a><button className='button-copy'>Copier le lien <span role="img" aria-label="icon file">{file}</span></button>
  </>

export const pathEligible =
  {
    question: <>Qui sera en charge techniquement de l’intégration de l’API Entreprise ?</>,
    big: true,
    choiceTree: [
      {
        choice: <><strong>Mon profil acheteur.</strong><br/>J’utilise une solution clé en main pour les marchés publics.</>,
        next: {
          question: <>Votre éditeur ou profil acheteur a-t-il déjà intégré l'API Entreprise ?</>,
          description: <>Sélectionnez votre éditeur dans la liste ci-dessous :</>,
          // TODO: Add editeurs here, manage CSS issue
          big: true,
          choiceTree: [
            {
              choice: <>Éditeur X - Solution Z</>,
              result: eligibleEditeurOk
            },
            {
              choice: <>Éditeur X - Solution Z</>,
              result: eligibleEditeurOk
            },
            {
              choice: <>Mon éditeur ne figure pas dans la liste ci-contre</>,
              result: eligibleEditeurNotOk
            }
          ]
        }
      },
      {
        choice: <><strong>Nos développeurs prestataires.</strong><br/>Ils conçoivent une solution logicielle sur-mesure pour mon administration.</>,
        result: eligibleDevelopersOk
      },
      {
        choice: <><strong>Mon éditeur.</strong><br/>J’utilise la solution clé en main proposée par un éditeur.</>,
        next: {
          question: <>Votre éditeur ou profil acheteur a-t-il déjà intégré l'API Entreprise ?</>,
          description: <>Sélectionnez votre éditeur dans la liste ci-dessous :</>,
          // TODO: Add editeurs here, manage CSS issue
          big: true,
          choiceTree: [
            {
              choice: <>Éditeur X - Solution Z</>,
              result: eligibleEditeurOk
            },
            {
              choice: <>Éditeur X - Solution Z</>,
              result: eligibleEditeurOk
            },
            {
              choice: <>Mon éditeur ne figure pas dans la liste ci-contre</>,
              result: eligibleEditeurNotOk
            }
          ]
        }
      },
      {
        choice: <><strong>Nos développeurs internes.</strong><br/>Ils conçoivent une solution logicielle sur-mesure pour mon administration.</>,
        result: eligibleDevelopersOk
      },
      {
        choice: <><strong>Je n’ai pas d’aide technique particulière.</strong><br/>Actuellement, je contacte les entreprises et associations une par une et traite leurs données à la main.</>,
        result: eligibleNoDevelopers
      }
    ]
  }
