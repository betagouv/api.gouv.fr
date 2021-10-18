import React, { useState } from 'react';
import { apiEntrepriseQuestionTree } from './data'

interface IQuestionTree {
  question: JSX.Element,
  description?: JSX.Element,
  choiceTree: ChoiceType[]
}

interface ChoiceType {
  choice: JSX.Element,
  next?: IQuestionTree,
  result?: JSX.Element
}

const Question: React.FC<{questionTree: IQuestionTree}> = ({questionTree}) => {
  const [currentChoiceType, setChoiceType] = useState<ChoiceType | null>(null)

  return (
    <div className='question-tree-wrapper'>
      <p><strong>{questionTree.question}</strong></p>
      <p>{questionTree.description}</p>
      {
        questionTree.choiceTree.map((choiceType, key) =>
          <button
            key={key}
            onClick={() => setChoiceType(choiceType)}
            className={choiceType === currentChoiceType ? 'selected' : ''}
          >
            <p className='choice'>{choiceType.choice}</p>
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
  switch (api) {
    case 'api-entreprise-or-association':
      return (<Question questionTree={apiEntrepriseQuestionTree.entrepriseOrAssociation} />)
    case 'api-entreprise-administration':
      return (<Question questionTree={apiEntrepriseQuestionTree.administration}/>)
    case 'api-entreprise-editeur':
      return (<Question questionTree={apiEntrepriseQuestionTree.editeur}/>)
    default:
      throw new Error('Should not be there.')
  }
}

export default QuestionTree;
