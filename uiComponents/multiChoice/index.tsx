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
  const onKeyDown = (
    keyEvent: React.KeyboardEvent<HTMLElement>,
    value: any
  ) => {
    // toggle on Space or Enter
    if (keyEvent.keyCode === 13) {
      onClick(value);
    }
  };

  return (
    <div id={id} className="multi-choice-wrapper">
      {multiChoiceOptions.map(choiceOptn => (
        <div
          role="button"
          tabIndex={0}
          key={choiceOptn.label}
          onKeyDown={e => onKeyDown(e, choiceOptn.value)}
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
