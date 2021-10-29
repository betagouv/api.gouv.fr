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
  question: <>Votre éditeur ou profil acheteur a-t-il déjà intégré l'API Entreprise ?</>,
  description: <>Sélectionnez votre éditeur dans la liste ci-dessous :</>,
  big: true,
  forceHeightTablet: '650px',
  choiceTree: [
    {
      choice: <>Achatpublic - achatpublic.com</>,
      answer: EligibleEditeurOk
    },
    {
      choice: <>Atexo - LocalTrustSub</>,
      answer: EligibleEditeurOk
    },
    {
      choice: <>Atexo - Place</>,
      answer: EligibleEditeurOk
    },
    {
      choice: <>AWS - AWS-achat</>,
      answer: EligibleEditeurOk
    },
    {
      choice: <>Atline Services - marches-securises.fr</>,
      answer: EligibleEditeurOk
    },
    {
      choice: <>Dematis - <br/> e-marchespublics.com</>,
      answer: EligibleEditeurOk
    },
    {
      choice: <>E-attestations - <br/> E-attestations.com</>,
      answer: EligibleEditeurOk
    },
    {
      choice: <>Klekoon - klekoon.com</>,
      answer: EligibleEditeurOk
    },
    {
      choice: <>MGDIS -<br/> Portail des aides</>,
      answer: EligibleEditeurOk
    },
    {
      choice: <>Provigis -<br/> Provigis plateforme</>,
      answer: EligibleEditeurOk
    },
    {
      choice: <>Territoires numériques - Pack commande publique</>,
      answer: EligibleEditeurOk
    },
    {
      choice: <><strong>Mon éditeur ne figure pas dans cette liste</strong></>,
      answer: EligibleEditeurNotOk
    }
  ]
}

export const pathEligible =
  {
    question: <>Qui sera en charge techniquement de l’intégration de l’API Entreprise ?</>,
    big: true,
    forceHeightTablet: '600px',
    choiceTree: [
      {
        choice: <><strong>Mon profil acheteur.</strong><br/>Rien à coder, j’utilise une solution clé en main pour les marchés publics</>,
        next: pathEditeur
      },
      {
        choice: <><strong>Nos développeurs prestataires.</strong><br/>Ils conçoivent une solution logicielle sur-mesure pour mon organisation</>,
        answer: EligibleDevelopersOk
      },
      {
        choice: <><strong>Mon éditeur.</strong><br/>Rien à coder, j’utilise une solution clé en main proposée par un éditeur</>,
        next: pathEditeur
      },
      {
        choice: <><strong>Nos développeurs internes.</strong><br/>Ils conçoivent une solution logicielle sur-mesure pour mon organisation</>,
        answer: EligibleDevelopersOk
      },
      {
        choice: <><strong>Je n’ai ni équipe technique, ni éditeur.</strong><br/>Actuellement, je contacte les entreprises et associations une par une et traite leurs données à la main</>,
        answer: EligibleNoDevelopers
      }
    ]
  }

  export const pathDevelopForAdministration =
  {
    question: <>À qui sont destinés les interfaces/logiciels que vous concevez ?</>,
    big: true,
    forceHeight: '130px',
    forceHeightTablet: '130px',
    choiceTree: [
      {
        choice: <>Aux administrations et/ou aux collectivités</>,
        next: {
          question: <>Quel type de service proposez-vous aux administrations ?</>,
          big: true,
          forceHeight: '130px',
          forceHeightTablet: '130px',
          choiceTree: [
            {
              choice: <>Un <strong>logiciel métier clé en main</strong>, proposé à de nombreuses entités administratives</>,
              answer: EditeurOk
            },
            {
              choice: <>Un logiciel conçu <strong>sur mesure</strong> pour une administration</>,
              answer: EditeurAskAdministration
            }
          ]
        }
      },
      {
        choice: <>Aux entreprises, associations et/ou particuliers</>,
        answer: ApiEntrepriseNonEligible({})
      }
    ]
  }
