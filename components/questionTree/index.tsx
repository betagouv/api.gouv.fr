import React, { useState } from 'react';

interface IQuestionTree {
  question: string,
  choiceTree: ChoiceType[]
}

interface ChoiceType {
  choice: string,
  next?: IQuestionTree,
  displayNext?: boolean
}

const apiEntrepriseQuestionTree = {
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
              choice: 'choix 1.2'
            }
          ]
        }
      },
      { choice: 'Choix 2' }
    ]
  }

const Question: React.FC<{questionTree: IQuestionTree}> = ({questionTree}) =>
{
  const [currentChoiceType, setChoiceType] = useState<ChoiceType | null>(null)

  return (
    <div>
    {questionTree.question}
    {
      questionTree.choiceTree.map((choiceType, key) =>
        <div key={key}>
          <button onClick={() => setChoiceType(choiceType)}>{choiceType.choice}</button>
        </div>
      )
    }
    {
      currentChoiceType && currentChoiceType.next ?
        <Question questionTree={currentChoiceType.next} /> :
          null
    }
  </div>
  )
}

const QuestionTree: React.FC<{ api: string }> = ({ api }) => {
  if (api === 'api-entreprise') {
    return (
      <Question
        questionTree={apiEntrepriseQuestionTree}
      />
    )
  } else {
    throw new Error('Should not be there.')
  }
}

export default QuestionTree;
