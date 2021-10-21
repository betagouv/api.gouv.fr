import {
  eligible,
  nonEligible,
  eligibleEditeurOk,
  eligibleEditeurNotOk,
  eligibleDevelopersOk,
  eligibleNoDevelopers,
  editeurOk,
  editeurAskAdministration
} from './dataShared'

const apiEntrepriseOrAssociation = {
  question: <>Votre entreprise/association est-elle dîte “chargée d’une mission de service public” ?</>,
  description: <>Les SNCF, la Poste sont des exemples d’entreprises chargées d’une mission de service public, tel que définies par la loi.</>,
  choiceTree: [
      {
        choice: <><strong>Oui</strong>, tel qu’inscrit dans la loi</>,
        transition: eligible,
        next: {
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
      },
      {
        choice: <strong>Non</strong>,
        result: nonEligible
      },
      {
        choice: <>Je développe des interfaces/logiciels pour une entité administrative</>,
        next: {
          question: <>À qui sont destinés les interfaces/logiciels que vous concevez ?</>,
          choiceTree: [
            {
              choice: <>Aux administrations et/ou aux collectivités</>,
              next: {
                question: <>Quel type de service proposez-vous aux administrations ?</>,
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
              choice: <>Aux entreprises/associations et/ou particuliers</>,
              result: nonEligible
            }
          ]
        }
      }
    ]
  }

const apiEntrepriseAdministration = {}


export default apiEntrepriseOrAssociation;
