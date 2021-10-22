import {
  editeurOk,
  editeurAskAdministration,
  nonEligible
} from './dataShared'

const apiEntrepriseEditeur = {
  question: <>À qui sont destinés les logiciels que vous concevez ?</>,
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
            choice: <>Un logiciel conçu <strong>sur mesure</strong> pour une administration</>,
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

export default apiEntrepriseEditeur
