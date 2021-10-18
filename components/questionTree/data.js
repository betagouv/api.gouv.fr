export const apiEntrepriseQuestionTree = {
    question: 'Premiere question',
    choiceTree: [
      {
        choice: 'choix 1',
        next: {
          question: 'Seconde question',
          choiceTree: [
            {
              choice: 'choix 1.1',
              next: {
                question: 'troisième',
                choiceTree: [
                  { choice: '1.1.1' }, { choice: '1.1.2' }
                ]
              }
            },
            {
              choice: 'choix 1.2',
              result: <div>Result</div>
            }
          ]
        }
      },
      { choice: 'Choix 2' }
    ]
  }

// <Button href="https://datapass.api.gouv.fr/api-entreprise">Remplir une demande</Button>
