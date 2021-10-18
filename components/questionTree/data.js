const apiEntrepriseOrAssociation = {
  question: 'Votre entreprise/association est-elle dîte “chargée d’une mission de service public” ?',
  description: 'Les SNCF, la Poste sont des exemples d’entreprises chargées d’une mission de service public, tel que définies par la loi.',
  choiceTree: [
      {
        choice: <span><strong>Oui</strong>, tel qu’inscrit dans la loi</span>,
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
