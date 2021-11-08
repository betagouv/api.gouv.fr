import React, { useState, useEffect } from 'react';
import RichReactMarkdown from '../richReactMarkdown';
import data from './data'

interface IQuestionTree {
  question: JSX.Element,
  description?: JSX.Element,
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
      <div className='choices'>
        {
          questionTree.choiceTree.map((choiceType, key) =>
          <button
            key={key}
            onClick={() => setChoiceType(choiceType)}
            className={`${choiceType === currentChoiceType ? 'selected' : ''}`}
          ><p className='choice'>{choiceType.choice}</p>
          </button>
          )
        }
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
  if (data[treeKey]) {
    return(<Question questionTree={data[treeKey]} parentsChoicesType={[]}/>)
  } else {
    throw new Error(`QuestionTree must be called with an existing key, but received :${treeKey},`)
  }
}

export default QuestionTree;
