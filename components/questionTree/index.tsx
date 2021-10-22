import React, { useState } from 'react';
import apiEntrepriseOrAssociation from './data/dataEntreprise'
import apiEntrepriseEditeur from './data/dataEditeur'
import apiEntrepriseAdministration from './data/dataAdministration'

interface IQuestionTree {
  question: JSX.Element,
  description?: JSX.Element,
  big?: Boolean,
  forceHeight?: string,
  choiceTree: ChoiceType[]
}

interface ChoiceType {
  choice: JSX.Element,
  next?: IQuestionTree,
  transition?: JSX.Element,
  result?: JSX.Element,
}

const Question: React.FC<{questionTree: IQuestionTree}> = ({questionTree}) => {
  const [currentChoiceType, setChoiceType] = useState<ChoiceType | null>(null)

  return (
    <div className='question-tree-wrapper'>
      <p><strong>{questionTree.question}</strong></p>
      <p>{questionTree.description}</p>
      <div
        className={`choices${questionTree.big? ' big' : ''}`}
        style={{height: `${questionTree.forceHeight ? questionTree.forceHeight : 'auto'}`}}
      >
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
      return (<Question questionTree={apiEntrepriseOrAssociation} />)
    case 'api-entreprise-administration':
      return (<Question questionTree={apiEntrepriseAdministration}/>)
    case 'api-entreprise-editeur':
      return (<Question questionTree={apiEntrepriseEditeur}/>)
    default:
      throw new Error('Should not be there.')
  }
}

export default QuestionTree;
