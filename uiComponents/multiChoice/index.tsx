import React from 'react';

interface MultiChoiceOption {
  label: string;
  value: any;
}

interface IProps {
  multiChoiceOptions: MultiChoiceOption[];
  onClick: (newSelectedOption: any) => void;
  selected?: any;
  label?: string;
  width?: number;
  id?: string;
}

const MultiChoice: React.FC<IProps> = ({
  onClick,
  multiChoiceOptions,
  selected = null,
  id = 'multi-choice',
}) => {
  return (
    <div id={id} className="multi-choice-wrapper">
      {multiChoiceOptions.map(choiceOptn => (
        <div
          key={choiceOptn.label}
          className={`choice ${
            choiceOptn.value === selected ? 'selected' : ''
          }`}
          onClick={() => onClick(choiceOptn.value)}
        >
          {choiceOptn.label}
        </div>
      ))}
    </div>
  );
};

export default MultiChoice;
