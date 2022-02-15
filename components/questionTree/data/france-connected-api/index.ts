const isFranceConnectedQuestions = {
  dgfip: {
    question:
      'Utilisez-vous ou comptez-vous utiliser FranceConnect sur votre service ?',
    choiceTree: [
      {
        choices: ['Oui'],
        answer: `Vous pouvez remplir une demande :
        <Button href="https://datapass.api.gouv.fr/api-impot-particulier-fc-sandbox">Remplir une demande</Button>`,
      },
      {
        choices: ['Non'],
        answer: `En remplissant cette demande, vous allez obtenir l’accès à l'API Impôt Particulier. Afin d'accéder aux données sans FranceConnect, il est également nécessaire d’avoir accès à <External href="/les-api/api_r2p/demande-acces"> l'API R2P</External> afin d'obtenir l'identifiant fiscal (SPI).
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-impot-particulier-sandbox">Remplir une demande</Button>
        `,
      },
    ],
  },
  statutEtudiant: {
    question:
      'Utilisez-vous ou comptez-vous utiliser FranceConnect sur votre service ?',
    choiceTree: [
      {
        choices: ['Oui'],
        answer: `Vous pouvez remplir une demande :
        <Button href="https://datapass.api.gouv.fr/api-statut-etudiant">Remplir une demande</Button>`,
      },
      {
        choices: ['Non'],
        answer: `En remplissant cette demande, vous allez obtenir l’accès à l'API Statut Etudiant, via l'API Particulier.
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `,
      },
    ],
  },
  prestationsSociales: {
    question:
      'Utilisez-vous ou comptez-vous utiliser FranceConnect sur votre service ?',
    choiceTree: [
      {
        choices: ['Oui'],
        answer: `Vous pouvez remplir une demande :
        <Button href="https://datapass.api.gouv.fr/api-prestations-sociales-fc">Remplir une demande</Button>`,
      },
      {
        choices: ['Non'],
        answer: `En remplissant cette demande, vous allez obtenir l’accès à l'API bénéficiaire d'une prestation de sécurité sociale, via l'API Particulier.
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `,
      },
    ],
  },
} as { [key: string]: any };

export default isFranceConnectedQuestions;
