import rightArrow from '../../uiComponents/icon/right-arrow'

const nonEligible =
  <>
    <p><strong>Vous n'êtes pas éligible à API Entreprise</strong> <span role="img" aria-label="émoji non">🚫</span></p>
    <p>L’usage des données de l’API Entreprise est reservé aux acteurs publics : les administrations, leurs opérateurs et les collectivités, les acteurs de santé, etc.</p>
    <p>D’autres API, publiques, permettent d’accéder à des données sur les entreprises et les associations :</p>
    <ul className='list-links'>
      <li><button>API Sirene {rightArrow}</button></li>
      <li><button>API Registre National du Commerce et des Sociétés {rightArrow}</button></li>
      <li><button>API Répertoire National des associations {rightArrow}</button></li>
      <li><button>API Répertoire National des métiers {rightArrow}</button></li>
      <li><button>Rechercher une autre API {rightArrow}</button></li>
    </ul>
  </>;

const eligible =
  <>
    <p><strong>Vous êtes éligible !</strong> <span role="img" aria-label="émoji oui">👌</span> Lors de la demande, vous devrez justifier par le cadre légal adéquat de votre statut de société chargée d’une mission de service public.</p>
  </>

const apiEntrepriseOrAssociation = {
  question: 'Votre entreprise/association est-elle dîte “chargée d’une mission de service public” ?',
  description: 'Les SNCF, la Poste sont des exemples d’entreprises chargées d’une mission de service public, tel que définies par la loi.',
  choiceTree: [
      {
        choice: <><strong>Oui</strong>, tel qu’inscrit dans la loi</>,
        transition: eligible,
        next: {
          question: 'Qui sera en charge techniquement de l’intégration de l’API Entreprise ?',
          big: true,
          choiceTree: [
            {
              choice: <><strong>Mon profil acheteur.</strong><br/>J’utilise une solution clé en main pour les marchés publics.</>,
              next: {
                question: 'troisième',
                choiceTree: [
                  { choice: '1.1.1' }, { choice: '1.1.2' }
                ]
              }
            },
            {
              choice: <><strong>Nos développeurs prestataires.</strong><br/>Ils conçoivent une solution logicielle sur-mesure pour mon administration.</>,
            },
            {
              choice: <><strong>Mon éditeur.</strong><br/>J’utilise la solution clé en main proposée par un éditeur.</>,
            },
            {
              choice: <><strong>Nos développeurs internes.</strong><br/>Ils conçoivent une solution logicielle sur-mesure pour mon administration.</>,
            },
            {
              choice: <><strong>Je n’ai pas d’aide technique particulière.</strong><br/>Actuellement, je contacte les entreprises et associations une par une et traite leurs données à la main.</>,
            }
          ]
        }
      },
      {
        choice: <strong>Non</strong>,
        result: nonEligible
      },
      {
        choice: <>Je suis en charge d’une telle mission <strong>au travers de mon donneur d’ordre public</strong></>
      }
    ]
  }

const apiEntrepriseAdministration = {}

const apiEntrepriseEditeur = {}

export const apiEntrepriseQuestionTree = {
  entrepriseOrAssociation: apiEntrepriseOrAssociation,
  administration: apiEntrepriseAdministration,
  editeur: apiEntrepriseEditeur
}
