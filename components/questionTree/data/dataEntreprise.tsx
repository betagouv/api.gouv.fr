import { Eligible, ApiEntrepriseNonEligible } from './dataShared'

import { pathEligible, pathDevelopForAdministration } from './paths';

const apiEntrepriseOrAssociation = {
  question: 'Votre entreprise/association est-elle :',
  choiceTree: [
      {
        choice: 'dîte **“chargée d’une mission de service public”**',
        answer: Eligible,
        next: pathEligible
      },
      {
        choice: 'dîte **"délégataire de service public”**',
        answer: Eligible,
        next: pathEligible
      },
      {
        choice: '**prestataire d’une entité administrative** et développant des logiciels/interfaces',
        next: pathDevelopForAdministration
      },
      {
        choice: 'un **cabinet d’avocat ou comptable**',
        answer: ApiEntrepriseNonEligible({})
      },
      {
        choice: 'dans aucune de ces situations',
        answer: ApiEntrepriseNonEligible({})
      }
    ]
  }

export default apiEntrepriseOrAssociation;
