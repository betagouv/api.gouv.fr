import React, { useState } from 'react';
import { apiEntrepriseQuestionTree } from './data'

interface IQuestionTree {
  question: string,
  choiceTree: ChoiceType[]
}

interface ChoiceType {
  choice: string,
  next?: IQuestionTree,
  result?: JSX.Element
}

const Question: React.FC<{questionTree: IQuestionTree}> = ({questionTree}) => {
  const [currentChoiceType, setChoiceType] = useState<ChoiceType | null>(null)

  return (
    <div className='question-tree-wrapper'>
      <p><strong>{questionTree.question}</strong></p>
      {
        questionTree.choiceTree.map((choiceType, key) =>
          <button
            key={key}
            onClick={() => setChoiceType(choiceType)}
            className={choiceType === currentChoiceType ? 'selected' : ''}
          >
            {choiceType.choice}
          </button>
        )
      }
      {
        currentChoiceType && currentChoiceType.next ?
          <Question questionTree={currentChoiceType.next} /> :
            null
      }
      {
        currentChoiceType && currentChoiceType.result ?
          <div className='result'>{ currentChoiceType.result }</div> :
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
