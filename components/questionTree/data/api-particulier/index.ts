import { pathEligible } from './eligible';

const apiParticulierQuestions = {
    apipart: {
    question: 'Qui sera en charge techniquement de l’intégration de l’API Particulier ?',
    choiceTree: [
        {
        choices: [
            'Mon éditeur de logiciel',
        ],
        next: pathEligible,
        },
        {
            choices: [
                'Mon équipe de développeurs (ou moi-même)',
                'Autre / Je ne sais pas'
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
            `,
            },
    ],
},
    } as { [key: string]: any };
  
  export default apiParticulierQuestions;
  