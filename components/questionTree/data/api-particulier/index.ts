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
            answer: `Conformément aux dispositions de <External href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367412&dateTexte=&categorieLien=cid">l'article L114-8</External> du *code des relations entre le public et l'administration*, seules les administrations sont habilitées à échanger entre elles des informations ou données strictement nécessaires pour traiter une démarche.
            <br/><br/>
            Pour obtenir un agrément, vous devez **justifier d'une simplification pour les citoyens**, et vous engager à
            n'accéder aux données personnelles qu'avec **l'accord explicite** de l'usager.
            <br/><br/>
            <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
            `,
            },
    ],
},
    } as { [key: string]: any };
  
  export default apiParticulierQuestions;
  