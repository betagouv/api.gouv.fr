import { Eligible, ApiEntrepriseNonEligible } from './dataShared'

import { pathEligible, pathDevelopForAdministration } from './paths';

const apiEntrepriseOrAssociation = {
  question: <>Votre entreprise/association est-elle :</>,
  big: true,
  forceHeight: '300px',
  forceHeightTablet: '480px',
  choiceTree: [
      {
        choice: <>dîte <strong>“chargée d’une mission de service public”</strong></>,
        answer: Eligible,
        next: pathEligible
      },
      {
        choice: <>dîte <strong>“délégataire de service public”</strong></>,
        answer: Eligible,
        next: pathEligible
      },
      {
        choice: <><strong>prestataire d’une entité administrative</strong> et développant des logiciels/interfaces</>,
        next: pathDevelopForAdministration
      },
      {
        choice: <>un <strong>cabinet d’avocat ou comptable</strong></>,
        answer: ApiEntrepriseNonEligible({})
      },
      {
        choice: <>dans aucune de ces situations</>,
        answer: ApiEntrepriseNonEligible({})
      }
    ]
  }

export default apiEntrepriseOrAssociation;
