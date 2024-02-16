const isBouquetApiPartepriseQuestions = {

  statutEtudiant: {
    question:
      'Votre service a-t’il besoin d’autres données concernant les particuliers ?',
    choiceTree: [
      {
        choices: ['**Non**, j’ai seulement besoin du statut étudiant.'],
        answer: `Vous pouvez remplir une demande auprès du Ministère de l'enseignement supérieur :
        <Button href="https://datapass.api.gouv.fr/api-statut-etudiant">Remplir une demande</Button>`,
      },
      {
        choices: ['**Oui**, le statut boursier, le quotient familial, le statut demandeur d’emploi... m’intéressent.'],
        answer: `Les données de l'API statut étudiant sont aussi distribuées par l'<External href="https://particulier.api.gouv.fr/catalogue/mesri/statut_etudiant">API du bouquet API Particulier</External>. Ce bouquet regroupe <External href="https://particulier.api.gouv.fr/catalogue">différentes données des particuliers</External>, dont vous pourrez aussi demander l'accès en complétant ce formulaire :
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande API Particulier</Button>
        `,
      },
    ],
  },
  statutEtudiantBoursier: {
    qusontion:
      'Votre service a-t’il besoin d’autres données concernant les particuliers ?',
    choiceTree: [
      {
        choices: ['**Non**, j’ai seulement besoin du statut étudiant boursier.'],
        answer: `Vous pouvez remplir une demande auprès du Cnous :
        <Button href="https://datapass.api.gouv.fr/api-statut-etudiant-boursier">Remplir une demande</Button>`,
      },
      {
        choices: ['**Oui**, le statut étudiant, le quotient familial, le statut demandeur d’emploi... m’intéressent.'],
      answer: `Les données de l'API statut étudiant boursier sont aussi distribuées par l'<External href="https://particulier.api.gouv.fr/catalogue/cnous/statut_etudiant_boursier">API du bouquet API Particulier</External>. Ce bouquet regroupe <External href="https://particulier.api.gouv.fr/catalogue">différentes données des particuliers</External>, dont vous pourrez aussi demander l'accès en complétant ce formulaire :
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande API Particulier</Button>
        `,
      },
    ],
  },
  scolariteEleve: {
    qusontion:
      'Votre service a-t’il besoin d’autres données concernant les particuliers ?',
    choiceTree: [
      {
        choices: ['**Non**, j’ai seulement besoin du statut élève scolarisé.'],
        answer: `Vous pouvez remplir une demande auprès du Ministère de l'éducation nationale et de la Jeunesse :
        <Button href="https://datapass.api.gouv.fr/api-scolarite">Remplir une demande</Button>`,
      },
      {
        choices: ['**Oui**, le statut étudiant, statut boursier, le quotient familial,... m’intéressent.'],
      answer: `Les données de l'API scolarité de l'élève sont aussi distribuées par le bouquet API Particulier, sous le nom <External href="https://particulier.api.gouv.fr/catalogue/cnous/statut_etudiant_boursier">API Statut élève scolarisé et boursier</External>. Ce bouquet regroupe <External href="https://particulier.api.gouv.fr/catalogue">différentes données des particuliers</External>, dont vous pourrez aussi demander l'accès en complétant ce formulaire :
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande API Particulier</Button>
        `,
      },
    ],
  },
  statutDe: {
    qusontion:
      'Votre service a-t’il besoin d’autres données concernant les particuliers ?',
    choiceTree: [
      {
        choices: ['**Non**, j’ai seulement besoin du statut demandeur d’emploi.'],
        answer: `Vous pouvez remplir une demande auprès de France Travail :
        <Button href="https://datapass.api.gouv.fr/api-statut-demandeur-emploi">Remplir une demande</Button>`,
      },
      {
        choices: ['**Oui**, la liste des paiements France Travail, la complémentaire santé solidaire, le quotient familial, le statut étudiant... m’intéressent.'],
        answer: `Les données de l'API statut demandeur d'emploi sont aussi distribuées par l'<External href="https://particulier.api.gouv.fr/catalogue/pole_emploi/situation">API du bouquet API Particulier</External>. Ce bouquet regroupe <External href="https://particulier.api.gouv.fr/catalogue">différentes données des particuliers</External>, dont vous pourrez aussi demander l'accès en complétant ce formulaire :
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `,
      },
    ],
  },
  indemnisationPe: {
    qusontion:
      'Votre service a-t’il besoin d’autres données concernant les particuliers ?',
    choiceTree: [
      {
        choices: ['**Non**, j’ai seulement besoin de la liste des paiements France Travail.'],
        answer: `Vous pouvez remplir une demande auprès de France Travail :
        <Button href="https://datapass.api.gouv.fr/api-indemnisation-pole-emploi">Remplir une demande</Button>`,
      },
      {
        choices: ['**Oui**, le statut demandeur d’emploi, la complémentaire santé solidaire, le statut étudiant... m’intéressent.'],
        answer: `Les données de l'API des indemnisations France Travail sont aussi distribuées par l'<External href="https://particulier.api.gouv.fr/catalogue/pole_emploi/indemnites">API Liste des paiements France Travail du bouquet API Particulier</External>. Ce bouquet regroupe <External href="https://particulier.api.gouv.fr/catalogue">différentes données des particuliers</External>, dont vous pourrez aussi demander l'accès en complétant ce formulaire :
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `,
      },
    ],
  },
} as { [key: string]: any };

export default isBouquetApiPartepriseQuestions;
