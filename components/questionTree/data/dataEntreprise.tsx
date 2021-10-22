import {
  eligible,
  nonEligible,
  pathEligible,
  pathDevelopForAdministration
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
        next: pathDevelopForAdministration
      }
    ]
  }

export default apiEntrepriseOrAssociation;
