import React, { useState, useEffect } from 'react';
import apiEntrepriseOrAssociation from './data/dataEntreprise'
import apiEntrepriseEditeur from './data/dataEditeur'
import apiEntrepriseAdministration from './data/dataAdministration'

interface IQuestionTree {
  question: JSX.Element,
  description?: JSX.Element,
  big?: Boolean,
  forceHeight?: string,
  choiceTree: ChoiceType[],
}

interface ChoiceType {
  choice: JSX.Element,
  next?: IQuestionTree,
  transition?: JSX.Element,
  result?: JSX.Element,
}

const Question: React.FC<{
  questionTree: IQuestionTree,
  parentsChoicesType: ChoiceType[],
}>
  = ({questionTree, parentsChoicesType }) => {
  const [currentChoiceType, setChoiceType] = useState<ChoiceType | null>(null)
  // When user change a parent choice in the tree, we close children
  useEffect(() => {
    setChoiceType(null)
  }, [parentsChoicesType]);



  return (
    <div className='question-tree-wrapper'>
      <h3>{questionTree.question}</h3>
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
        <style jsx>{`
            @media (min-width: 768px) {
              .choices {
                height: ${questionTree.forceHeight ? questionTree.forceHeight : 'auto'}};
              }
            }
        `}</style>
      </div>
      <div  />
      {
        currentChoiceType && currentChoiceType.transition ?
          <div className='transition'>{currentChoiceType.transition}</div> :
          null
      }
      {
        currentChoiceType && currentChoiceType.next ?
          <Question
            questionTree={currentChoiceType.next}
            parentsChoicesType={[...parentsChoicesType, currentChoiceType]}
          /> :
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
      return (<Question questionTree={apiEntrepriseOrAssociation as any} parentsChoicesType={[]}/>)
    case 'api-entreprise-administration':
      return (<Question questionTree={apiEntrepriseAdministration} parentsChoicesType={[]} />)
    case 'api-entreprise-editeur':
      return (<Question questionTree={apiEntrepriseEditeur as any} parentsChoicesType={[]} />)
    default:
      throw new Error('Should not be there.')
  }
}

export default QuestionTree;
