export const generateFormulaireUniqueQuestion = (apiName: string) => ({
  question: 'Faites-vous appel à un éditeur de logiciels ?',
  choiceTree: [
    {
      choices: ['Oui'],
      answer: `Vous êtes éligible et pouvez remplir une demande pour accéder directement à l'environnement de production. 
        <br/>Avant de soumettre votre demande, vous devrez vous assurer que votre éditeur de logiciels a bien finalisé ses développements en environnement de tests (bac à sable).
        <br/><br/><Button href="https://datapass.api.gouv.fr/api-${apiName}-unique">Remplir une demande</Button>`,
    },
    {
      choices: ['Non'],
      answer: `<br/><Button href="https://datapass.api.gouv.fr/api-${apiName}-sandbox">Remplir une demande</Button>`,
    },
  ],
});

const formulaireUniqueQuestions = {
  r2p: generateFormulaireUniqueQuestion('r2p'),
  sfip: generateFormulaireUniqueQuestion('sfip'),
  ficoba: generateFormulaireUniqueQuestion('ficoba'),
} as { [key: string]: any };

export default formulaireUniqueQuestions;
