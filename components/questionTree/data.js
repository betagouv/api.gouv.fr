const apiEntrepriseOrAssociation = {
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

const apiEntrepriseAdministration = {}

const apiEntrepriseEditeur = {}

export const apiEntrepriseQuestionTree = {
  entrepriseOrAssociation: apiEntrepriseOrAssociation,
  administration: apiEntrepriseAdministration,
  editeur: apiEntrepriseEditeur
}
