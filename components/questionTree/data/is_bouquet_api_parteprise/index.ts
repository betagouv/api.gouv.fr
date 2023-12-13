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
        answer: `Cette API statut étudiant est aussi distribuée par le bouquet <a href="https://particulier.api.gouv.fr/catalogue" target="_blank">API Particulier</a>, qui regroupe plusieurs API des données des particuliers. En remplissant cette demande d'accès, vous pourrez demander d'autres données :
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande API Particulier</Button>
        `,
      },
    ],
  },
  statutEtudiantBoursier: {
    question:
      'Votre service a-t’il besoin d’autres données concernant les particuliers ?',
    choiceTree: [
      {
        choices: ['**Non**, j’ai seulement besoin du statut étudiant boursier.'],
        answer: `Vous pouvez remplir une demande auprès du Cnous :
        <Button href="https://datapass.api.gouv.fr/api-statut-etudiant-boursier">Remplir une demande</Button>`,
      },
      {
        choices: ['**Oui**, le statut étudiant, le quotient familial, le statut demandeur d’emploi... m’intéressent.'],
        answer: `Cette API statut étudiant boursier est aussi distribuée par le bouquet <a href="https://particulier.api.gouv.fr/catalogue" target="_blank">API Particulier</a>, qui regroupe plusieurs API des données des particuliers. En remplissant cette demande d'accès, vous pourrez demander d'autres données :
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande API Particulier</Button>
        `,
      },
    ],
  },
  statutDe: {
    question:
      'Votre service a-t’il besoin d’autres données concernant les particuliers ?',
    choiceTree: [
      {
        choices: ['**Non**, j’ai seulement besoin du statut demandeur d’emploi.'],
        answer: `Vous pouvez remplir une demande auprès de Pôle emploi :
        <Button href="https://datapass.api.gouv.fr/api-statut-demandeur-emploi">Remplir une demande</Button>`,
      },
      {
        choices: ['**Oui**, la complémentaire santé solidaire, le quotient familial, le statut étudiant... m’intéressent.'],
        answer: `Cette API statut demandeur d'emploi est aussi distribuée par le bouquet <a href="https://particulier.api.gouv.fr/catalogue" target="_blank">API Particulier</a>, qui regroupe plusieurs API des données des particuliers. En remplissant cette demande d'accès, vous pourrez demander d'autres données :
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `,
      },
    ],
  },
} as { [key: string]: any };

export default isBouquetApiPartepriseQuestions;
