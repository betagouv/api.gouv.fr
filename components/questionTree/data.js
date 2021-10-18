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

const apiEntrepriseOrAssociation = {
  question: 'Votre entreprise/association est-elle dîte “chargée d’une mission de service public” ?',
  description: 'Les SNCF, la Poste sont des exemples d’entreprises chargées d’une mission de service public, tel que définies par la loi.',
  choiceTree: [
      {
        choice: <><strong>Oui</strong>, tel qu’inscrit dans la loi</>,
        next: {
          question: 'Seconde question',
          choiceTree: [
            {
              choice: 'choix 1.1',
              next: {
                question: 'troisième',
                choiceTree: [
                  { choice: '1.1.1' }, { choice: '1.1.2' }
                ]
              }
            },
            {
              choice: 'choix 1.2',
              result: <div>Result</div>
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
