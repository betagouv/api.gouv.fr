const formulaireUniqueQuestions = {
  r2p: {
    question: 'Faites-vous appel à un éditeur de logiciels ?',
    choiceTree: [
        {
        choices: [
            'Oui',
        ],
        answer: `Vous êtes éligible et pouvez remplir une demande pour accéder directement à l'environnement de production. 
        <br/>Avant de soumettre votre demande, vous devrez vous assurer que votre éditeur de logiciels a bien finalisé ses développements en environnement de tests (bac à sable).
        <br/><br/><Button href="https://datapass.api.gouv.fr/api-r2p-unique">Remplir une demande</Button>
        `,
        },
        {
            choices: [
                'Non',
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-r2p-sandbox">Remplir une demande</Button>
            `,
            },
    ],
},
sfip: {
    question: 'Faites-vous appel à un éditeur de logiciels ?',
    choiceTree: [
        {
        choices: [
            'Oui',
        ],
        answer: `Vous êtes éligible et pouvez remplir une demande pour accéder directement à l'environnement de production. 
        <br/>Avant de soumettre votre demande, vous devrez vous assurer que votre éditeur de logiciels a bien finalisé ses développements en environnement de tests (bac à sable).
        <br/><br/><Button href="https://datapass.api.gouv.fr/api-sfip-unique">Remplir une demande</Button>
        `,
        },
        {
            choices: [
                'Non',
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-sfip-sandbox">Remplir une demande</Button>
            `,
            },
    ],
},
ficoba: {
    question: 'Faites-vous appel à un éditeur de logiciels ?',
    choiceTree: [
        {
        choices: [
            'Oui',
        ],
        answer: `Vous êtes éligible et pouvez remplir une demande pour accéder directement à l'environnement de production. 
        <br/>Avant de soumettre votre demande, vous devrez vous assurer que votre éditeur de logiciels a bien finalisé ses développements en environnement de tests (bac à sable).
        <br/><br/><Button href="https://datapass.api.gouv.fr/api-ficoba-unique">Remplir une demande</Button>
        `,
        },
        {
            choices: [
                'Non',
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-ficoba-sandbox">Remplir une demande</Button>
            `,
            },
    ],
},
    } as { [key: string]: any };

export default formulaireUniqueQuestions;
