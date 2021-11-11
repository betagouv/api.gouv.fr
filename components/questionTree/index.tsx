import React, { useState, useEffect } from 'react';
import constants from '../../constants';
import RichReactMarkdown from '../richReactMarkdown';
import data from './data';

interface IQuestionTree {
  question: string;
  description?: string;
  choiceTree: IChoiceType[];
}

interface IChoiceType {
  choice: string;
  next?: IQuestionTree;
  answer?: string;
}

const Question: React.FC<{
  questionTree: IQuestionTree;
  parentsChoicesType: IChoiceType[];
}> = ({ questionTree, parentsChoicesType }) => {
  const [currentChoiceType, setChoiceType] = useState<IChoiceType | null>(null);
  // When user change a parent choice in the tree, we close children
  useEffect(() => {
    setChoiceType(null);
  }, [parentsChoicesType]);

  return (
    <div className="question-tree-wrapper">
      <h3>{<RichReactMarkdown source={questionTree.question} />}</h3>
      {questionTree.description ? (
        <p>{<RichReactMarkdown source={questionTree.description} />}</p>
      ) : null}
      <div className="choices">
        {questionTree.choiceTree.map((choiceType, key) => (
          <button
            key={key}
            onClick={() => setChoiceType(choiceType)}
            className={`${choiceType === currentChoiceType ? 'selected' : ''}`}
          >
            <p className="choice">
              {<RichReactMarkdown source={choiceType.choice} />}
            </p>
          </button>
        ))}
      </div>
      <div />
      {currentChoiceType && currentChoiceType.answer ? (
        <div className="transition">
          {<RichReactMarkdown source={currentChoiceType.answer} />}
        </div>
      ) : null}
      {currentChoiceType && currentChoiceType.next ? (
        <Question
          questionTree={currentChoiceType.next}
          parentsChoicesType={[...parentsChoicesType, currentChoiceType]}
        />
      ) : null}

      <style jsx>{`
        .question-tree-wrapper button {
          display: inline-flex;
          background-color: ${constants.colors.lightBlue};
          padding: 5px 10px;
          border-radius: 6px;
          margin: 5px 5px 0 0;
          border: 2px solid transparent;
          font-size: 1.1rem;
          line-height: 1.6rem;
          color: ${constants.colors.darkestGrey};
          width: 240px;
          margin: 15px 15px 5px 5px;
        }

        .question-tree-wrapper button.selected,
        .question-tree-wrapper button:hover {
          border-color: ${constants.colors.blue};
        }

        .question-tree-wrapper .choices {
          display: flex;
          flex-wrap: wrap;
        }

        .question-tree-wrapper .choice {
          margin: 0;
          text-align: left;
        }
        @media (min-width: 768px) {
          .question-tree-wrapper .choices {
            max-height: 450px;
          }
        }
      `}</style>
    </div>
  );
};

const QuestionTree: React.FC<{ treeKey: string }> = ({ treeKey }) => {
  if (data[treeKey]) {
    return <Question questionTree={data[treeKey]} parentsChoicesType={[]} />;
  } else {
    throw new Error(
      `QuestionTree must be called with an existing key, but received :${treeKey},`
    );
  }
};

export default QuestionTree;
