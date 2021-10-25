import { eligible, ApiEntrepriseNonEligible } from './dataShared'

import { pathEligible, pathDevelopForAdministration } from './paths';

const apiEntrepriseOrAssociation = {
  question: <>Votre entreprise/association est-elle :</>,
  description: <>Les SNCF, la Poste sont des exemples d’entreprises chargées d’une mission de service public, tel que définies par la loi.</>,
  choiceTree: [
      {
        choice: <>dîte <strong>“chargée d’une mission de service public”</strong>, d’après un texte législatif ou réglementaire</>,
        transition: eligible,
        next: pathEligible
      },
      {
        choice: <>dîte <strong>“délégataire de service public”</strong></>,
        transition: eligible,
        next: pathEligible
      },
      {
        choice: <><strong>prestataire d’une entité administrative</strong> et développant des logiciels/interfaces</>,
        next: pathDevelopForAdministration
      },
      {
        choice: <>un <strong>cabinet d’avocat ou comptable</strong></>,
        result: ApiEntrepriseNonEligible({withAnnuaire: true})
      },
      {
        choice: <>dans <strong>aucune des situations</strong> ci-dessus</>,
        result: ApiEntrepriseNonEligible({withAnnuaire: true})
      }
    ]
  }

export default apiEntrepriseOrAssociation;
