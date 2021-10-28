import {
  eligibleEditeurNotOk,
  eligibleEditeurOk,
  ApiEntrepriseNonEligible,
  eligibleNoDevelopers,
  eligibleDevelopersOk,
  editeurOk,
  editeurAskAdministration
} from './dataShared';

const pathEditeur = {
  question: <>Votre éditeur ou profil acheteur a-t-il déjà intégré l'API Entreprise ?</>,
  description: <>Sélectionnez votre éditeur dans la liste ci-dessous :</>,
  big: true,
  forceHeightTablet: '650px',
  choiceTree: [
    {
      choice: <>Achatpublic - achatpublic.com</>,
      result: eligibleEditeurOk
    },
    {
      choice: <>Atexo - LocalTrustSub</>,
      result: eligibleEditeurOk
    },
    {
      choice: <>Atexo - Place</>,
      result: eligibleEditeurOk
    },
    {
      choice: <>AWS - AWS-achat</>,
      result: eligibleEditeurOk
    },
    {
      choice: <>Atline Services - marches-securises.fr</>,
      result: eligibleEditeurOk
    },
    {
      choice: <>Dematis - <br/> e-marchespublics.com</>,
      result: eligibleEditeurOk
    },
    {
      choice: <>E-attestations - <br/> E-attestations.com</>,
      result: eligibleEditeurOk
    },
    {
      choice: <>Klekoon - klekoon.com</>,
      result: eligibleEditeurOk
    },
    {
      choice: <>MGDIS -<br/> Portail des aides</>,
      result: eligibleEditeurOk
    },
    {
      choice: <>Provigis -<br/> Provigis plateforme</>,
      result: eligibleEditeurOk
    },
    {
      choice: <>Territoires numériques - Pack commande publique</>,
      result: eligibleEditeurOk
    },
    {
      choice: <><strong>Mon éditeur ne figure pas dans cette liste</strong></>,
      result: eligibleEditeurNotOk
    }
  ]
}

export const pathEligible =
  {
    question: <>Qui sera en charge techniquement de l’intégration de l’API Entreprise ?</>,
    big: true,
    forceHeightTablet: '500px',
    choiceTree: [
      {
        choice: <><strong>Mon profil acheteur.</strong><br/>Rien à coder, j’utilise une solution clé en main pour les marchés publics.</>,
        next: pathEditeur
      },
      {
        choice: <><strong>Nos développeurs prestataires.</strong><br/>Ils conçoivent une solution logicielle sur-mesure pour mon organisation.</>,
        result: eligibleDevelopersOk
      },
      {
        choice: <><strong>Mon éditeur.</strong><br/>Rien à coder, j’utilise une solution clé en main proposée par un éditeur.</>,
        next: pathEditeur
      },
      {
        choice: <><strong>Nos développeurs internes.</strong><br/>Ils conçoivent une solution logicielle sur-mesure pour mon organisation.</>,
        result: eligibleDevelopersOk
      },
      {
        choice: <><strong>Je n’ai ni équipe technique, ni éditeur.</strong><br/>Actuellement, je contacte les entreprises et associations une par une et traite leurs données à la main.</>,
        result: eligibleNoDevelopers
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
              result: editeurOk
            },
            {
              choice: <>Un logiciel conçu <strong>sur mesure</strong> pour une administration.</>,
              result: editeurAskAdministration
            }
          ]
        }
      },
      {
        choice: <>Aux entreprises, associations et/ou particuliers</>,
        result: ApiEntrepriseNonEligible({})
      }
    ]
  }
