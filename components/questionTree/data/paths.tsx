import {
  EligibleEditeurNotOk,
  EligibleEditeurOk,
  ApiEntrepriseNonEligible,
  EligibleNoDevelopers,
  EligibleDevelopersOk,
  EditeurOk,
  EditeurAskAdministration
} from './dataShared';

const pathEditeur = {
  question: "Votre éditeur ou profil acheteur a-t-il déjà intégré l'API Entreprise ?",
  description: 'Sélectionnez votre éditeur dans la liste ci-dessous :',
  choiceTree: [
    {
      choice: 'Achatpublic - achatpublic.com',
      answer: EligibleEditeurOk
    },
    {
      choice: 'Atexo - LocalTrustSub',
      answer: EligibleEditeurOk
    },
    {
      choice: 'Atexo - Place',
      answer: EligibleEditeurOk
    },
    {
      choice: 'AWS - AWS-achat',
      answer: EligibleEditeurOk
    },
    {
      choice: 'Atline Services - marches-securises.fr',
      answer: EligibleEditeurOk
    },
    {
      choice: 'Dematis - e-marchespublics.com',
      answer: EligibleEditeurOk
    },
    {
      choice: 'E-attestations - E-attestations.com',
      answer: EligibleEditeurOk
    },
    {
      choice: 'Klekoon - klekoon.com',
      answer: EligibleEditeurOk
    },
    {
      choice: 'MGDIS - Portail des aides',
      answer: EligibleEditeurOk
    },
    {
      choice: 'Provigis - Provigis plateforme',
      answer: EligibleEditeurOk
    },
    {
      choice: 'Territoires numériques - Pack commande publique',
      answer: EligibleEditeurOk
    },
    {
      choice: '**Mon éditeur ne figure pas dans cette liste**',
      answer: EligibleEditeurNotOk
    }
  ]
}

export const pathEligible =
  {
    question: 'Qui sera en charge techniquement de l’intégration de l’API Entreprise ?',
    choiceTree: [
      {
        choice: '**Nos développeurs internes.**<br/>Ils conçoivent une solution logicielle sur-mesure pour mon organisation.',
        answer: EligibleDevelopersOk
      },
      {
        choice: '**Nos développeurs prestataires.**<br/>Ils conçoivent une solution logicielle sur-mesure pour mon organisation.',
        answer: EligibleDevelopersOk
      },
      {
        choice: '**Mon éditeur.**<br/>Rien à coder, j’utilise une solution clé en main proposée par un éditeur.',
        next: pathEditeur
      },
      {
        choice: '**Je n’ai ni équipe technique, ni éditeur.**<br/>Actuellement, je contacte les entreprises et associations une par une et traite leurs données à la main.',
        answer: EligibleNoDevelopers
      }
    ]
  }

  export const pathDevelopForAdministration =
  {
    question: 'À qui sont destinés les interfaces/logiciels que vous concevez ?',
    choiceTree: [
      {
        choice: 'Aux administrations et/ou aux collectivités',
        next: {
          question: 'Quel type de service proposez-vous aux administrations ?',
          choiceTree: [
            {
              choice: 'Un **logiciel métier clé en main**, proposé à de nombreuses entités administratives',
              answer: EditeurOk
            },
            {
              choice: 'Un logiciel conçu **sur mesure** pour une administration',
              answer: EditeurAskAdministration
            }
          ]
        }
      },
      {
        choice: 'Aux entreprises, associations et/ou particuliers',
        answer: ApiEntrepriseNonEligible
      }
    ]
  }
