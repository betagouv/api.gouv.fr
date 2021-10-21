import React, { useState } from 'react';
import { apiEntrepriseQuestionTree } from './data'

interface IQuestionTree {
  question: JSX.Element,
  description?: JSX.Element,
  big?: Boolean,
  choiceTree: ChoiceType[]
}

interface ChoiceType {
  choice: JSX.Element,
  next?: IQuestionTree,
  transition?: JSX.Element,
  result?: JSX.Element,
  big?: Boolean
}

const Question: React.FC<{questionTree: IQuestionTree}> = ({questionTree}) => {
  const [currentChoiceType, setChoiceType] = useState<ChoiceType | null>(null)

  return (
    <div className='question-tree-wrapper'>
      <p><strong>{questionTree.question}</strong></p>
      <p>{questionTree.description}</p>
      <div className={`choices${questionTree.big? ' big' : ''}`}>
        {
          questionTree.choiceTree.map((choiceType, key) =>
          <button
            key={key}
            onClick={() => setChoiceType(choiceType)}
            className={`
              ${choiceType === currentChoiceType ? 'selected' : ''}
              ${questionTree.big ? ' big' : ''}
            `}
          >
              <p className='choice'>{choiceType.choice}</p>
            </button>
          )
        }
      </div>
      {
        currentChoiceType && currentChoiceType.transition ?
          <div className='transition'>{currentChoiceType.transition}</div> :
          null
      }
      {
        currentChoiceType && currentChoiceType.next ?
          <Question questionTree={currentChoiceType.next} /> :
            null
      }
      {
        currentChoiceType && currentChoiceType.result ?
          <div className='result'>{currentChoiceType.result}</div> :
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
