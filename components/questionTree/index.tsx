import React, { useState, useEffect, Fragment } from 'react';
import constants from '../../constants';
import RichReactMarkdown from '../richReactMarkdown';
import { allQuestions } from './data';

interface IQuestionTree {
  question: string;
  choiceTree: IChoiceType[];
}

interface IChoiceType {
  choices: string[];
  next?: IQuestionTree;
  answer?: string;
}

const Question: React.FC<{
  questionTree: IQuestionTree;
  parentLabel?: string;
}> = ({ questionTree, parentLabel }) => {
  const [currentChoiceType, setChoiceType] = useState<IChoiceType | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(
    undefined
  );
  // When user change a parent choice in the tree, we close children
  useEffect(() => {
    setChoiceType(null);
  }, [parentLabel]);

  return (
    <div className="question-tree-wrapper">
      <h3>{questionTree.question}</h3>
      <div className="choices">
        {questionTree.choiceTree.map((choiceType, key) => (
          <Fragment key={key}>
            {choiceType.choices.map(choice => (
              <button
                key={choice}
                onClick={() => {
                  setSelectedLabel(choice);
                  setChoiceType(choiceType);
                }}
                className={choice === selectedLabel ? 'selected' : ''}
              >
                <RichReactMarkdown source={choice} />
              </button>
            ))}
          </Fragment>
        ))}
      </div>
      <div />
      {currentChoiceType && currentChoiceType.answer && (
        <RichReactMarkdown source={currentChoiceType.answer} />
      )}
      {currentChoiceType && currentChoiceType.next && (
        <Question
          questionTree={currentChoiceType.next}
          parentLabel={selectedLabel}
        />
      )}

      <style jsx>{`
        .question-tree-wrapper button {
          display: inline-flex;
          background-color: ${constants.colors.lightBlue};
          padding: 5px 10px;
          border-radius: 6px;
          border: 2px solid transparent;
          font-size: 1.1rem;
          line-height: 1.6rem;
          color: ${constants.colors.darkestGrey};
          width: calc(30% - 12px);
          margin: 6px 6px 0 0;
          text-align: left;
        }

        .question-tree-wrapper button.selected,
        .question-tree-wrapper button:hover {
          border-color: ${constants.colors.blue};
        }

        .question-tree-wrapper .choices {
          display: flex;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .question-tree-wrapper button {
            width: calc(50% - 6px);
          }
        }
        @media (max-width: 600px) {
          .question-tree-wrapper button {
            width: 100% - 6px);
          }
        }
      `}</style>
    </div>
  );
};

const QuestionTree: React.FC<{ tree: string; question: string }> = ({
  tree,
  question,
}) => {
  if (allQuestions[tree] && allQuestions[tree][question]) {
    return <Question questionTree={allQuestions[tree][question]} />;
  } else {
    throw new Error(
      `QuestionTree must be called with an existing key, but received : ${tree} and then ${question},`
    );
  }
};

export default QuestionTree;
