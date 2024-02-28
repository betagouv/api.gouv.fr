import { generateFormulaireUniqueQuestion } from '../formulaire-unique';

const isQuestionsTree = {
  dgfip: {
    question:
      'Comment souhaitez-vous accéder aux données de la DGFiP ?',
    choiceTree: [
      {
        choices: ['via FranceConnect'],
        next: generateFormulaireUniqueQuestion('impot-particulier-fc'),
      },
      {
        choices: ['via le numéro fiscal (SPI)'],
        next: generateFormulaireUniqueQuestion('impot-particulier'),
      },
      {
        choices: [' via l‘état civil'],
        next: generateFormulaireUniqueQuestion('sfip'),
      },
    ],
  },
  agentConnect: {
    question: 'Vous êtes...',
    choiceTree: [
      {
        choices: ['Fournisseur de services'],
        answer: `Si vous souhaitez intégrer le bouton AgentConnect dans votre service, pouvez remplir cette demande :
        <Button href="https://datapass.api.gouv.fr/agent-connect-fs">Remplir une demande</Button>
        `,
      },
      {
        choices: ['Fournisseur d‘identité'],
        answer: `Si vous souhaitez contribuer à AgentConnect en fournissant des données d'identité, vous pouvez remplir cette demande :
        <br/>
        <Button href="https://datapass.api.gouv.fr/agent-connect-fi">Remplir une demande</Button>
        `,
      },
    ],
  },
} as { [key: string]: any };

export default isQuestionsTree;
