import React, { useState, useEffect } from 'react';
import apiEntrepriseOrAssociation from './data/dataEntreprise'
import apiEntrepriseEditeur from './data/dataEditeur'
import apiEntrepriseAdministration from './data/dataAdministration'
import RichReactMarkdown from '../richReactMarkdown';

interface IQuestionTree {
  question: JSX.Element,
  description?: JSX.Element,
  big?: Boolean,
  forceHeight?: string,
  forceHeightTablet?: string,
  choiceTree: IChoiceType[],
}

interface IChoiceType {
  choice: JSX.Element,
  next?: IQuestionTree,
  answer?: JSX.Element,
}

const Question: React.FC<{
  questionTree: IQuestionTree,
  parentsChoicesType: IChoiceType[],
}>
  = ({questionTree, parentsChoicesType}) => {
  const [currentChoiceType, setChoiceType] = useState<IChoiceType | null>(null)
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
          ><p className='choice'>{choiceType.choice}</p>
          </button>
          )
        }
        <style jsx>{`
          @media (min-width: 504px) {
            .choices {
              height: ${questionTree.forceHeightTablet ? questionTree.forceHeightTablet : 'auto'}};
            }
          }
          @media (min-width: 768px) {
            .choices {
              height: ${questionTree.forceHeight ? questionTree.forceHeight : 'auto'}};
            }
          }`}
        </style>
      </div>
      <div  />
      {
        currentChoiceType && currentChoiceType.answer ?
          <div className='transition'>
            {typeof currentChoiceType.answer === 'string' ? <RichReactMarkdown source={currentChoiceType.answer}/> : currentChoiceType.answer }
          </div> :
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
    </div>
  )
}

const QuestionTree: React.FC<{ treeKey: string }> = ({ treeKey }) => {
  const data:{[key: string]: any} = {
    'api-entreprise-or-association' : apiEntrepriseOrAssociation,
    'api-entreprise-administration': apiEntrepriseAdministration,
    'api-entreprise-editeur': apiEntrepriseEditeur
 }

  return <Question questionTree={data[treeKey]} parentsChoicesType={[]}/>
}

export default QuestionTree;
