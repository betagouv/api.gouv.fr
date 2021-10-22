import {
  eligible,
  nonEligible,
  editeurOk,
  editeurAskAdministration,
  pathEligible
} from './dataShared'

const apiEntrepriseOrAssociation = {
  question: <>Votre entreprise/association est-elle dîte “chargée d’une mission de service public” ?</>,
  description: <>Les SNCF, la Poste sont des exemples d’entreprises chargées d’une mission de service public, tel que définies par la loi.</>,
  choiceTree: [
      {
        choice: <><strong>Oui</strong>, tel qu’inscrit dans la loi</>,
        transition: eligible,
        next: pathEligible
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

export default apiEntrepriseOrAssociation;
