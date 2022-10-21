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
        next:
        {
          question:
            'Souhaitez vous migrer de l’API Particulier (DINUM) vers l’API Impôt Particulier (DGFiP) ?',
          choiceTree: [
            {
              choices: ['Oui',],
              answer: `**<span role='img' aria-label='émoji ok'>👍</span> Vous êtes éligible et pouvez remplir une demande de migration.
              <br/><br/>
              <Button href='https://datapass.api.gouv.fr/api-impot-particulier-sandbox?demarche=migration_api_particulier' target='_blank' rel="noreferrer noopener">Déposer une demande</Button>`,
            },
            {
              choices: ['Non',],
              answer: `**<span role='img' aria-label='émoji ok'>👍</span> Vous êtes éligible et pouvez remplir une demande.
              <br/><br/>
              <Button href='https://datapass.api.gouv.fr/api-impot-particulier-sandbox' target='_blank' rel="noreferrer noopener">Déposer une demande</Button>`,
            },
          ],
        },
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
  statutEtudiantBoursier: {
    question:
      'Utilisez-vous ou comptez-vous utiliser FranceConnect sur votre service ?',
    choiceTree: [
      {
        choices: ['Oui'],
        answer: `Vous pouvez remplir une demande :
        <Button href="https://datapass.api.gouv.fr/api-statut-etudiant-boursier">Remplir une demande</Button>`,
      },
      {
        choices: ['Non'],
        answer: `En remplissant cette demande, vous allez obtenir l’accès à l'API Statut étudiant boursier, via l'API Particulier.
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `,
      },
    ],
  },
  agentConnect: {
    question:
      'Vous êtes...',
    choiceTree: [
      {
        choices: ['Fournisseur de services'],
        answer: `Si vous souhaitez intégrer le bouton AgentConnect dans votre service, pouvez remplir cette demande :
        <Button href="https://datapass.api.gouv.fr/agent-connect-fs">Remplir une demande</Button>
        `,
      },
      {
        choices: ['Fournisseur d‘identité'],
        answer: `Si vous souahitez contribuer à AgentConnect en fournissant des données d'identité, vous pouvez remplir cette demande :
        <br/>
        <Button href="https://datapass.api.gouv.fr/agent-connect-fi">Remplir une demande</Button>
        `,
      },
    ],
  },
  statutDe: {
    question:
      'Utilisez-vous ou comptez-vous utiliser FranceConnect sur votre service ?',
    choiceTree: [
      {
        choices: ['Oui'],
        answer: `Vous pouvez remplir une demande :
        <Button href="https://datapass.api.gouv.fr/api-statut-demandeur-emploi">Remplir une demande</Button>`,
      },
      {
        choices: ['Non'],
        answer: `En remplissant cette demande, vous allez obtenir l’accès à l'API statut demandeur d'emploi, via l'API Particulier.
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `,
      },
    ],
  },
indemnisationPe: {
    question:
      'Utilisez-vous ou comptez-vous utiliser FranceConnect sur votre service ?',
    choiceTree: [
      {
        choices: ['Oui'],
        answer: `Vous pouvez remplir une demande :
        <Button href="https://datapass.api.gouv.fr/api-indemnisation-pole-emploi">Remplir une demande</Button>`,
      },
      {
        choices: ['Non'],
        answer: `En remplissant cette demande, vous allez obtenir l’accès à l'API indemnisation Pôle emploi via l'API Particulier.
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `,
      },
    ],
  },
} as { [key: string]: any };

export default isFranceConnectedQuestions;
