import React, { ChangeEvent } from 'react';

interface IProps {
  onChange: (newSelectedOption: number | null) => void;
  label?: string;
  width?: number;
  id?: string;
  placeholder?: string;
}

const TextArea: React.FC<IProps> = ({
  onChange,
  label = null,
  placeholder = 'Choisissez une option',
  width = 250,
  id = 'text-area',
}) => {
  const onSelect = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value === '-1') {
      onChange(null);
      return;
    }
    const index = parseInt(event.target.value, 10);
    onChange(index);
  };

  return (
    <div className="dropdown-wrapper" style={{ width: `${width}px` }}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        onChange={onSelect}
        onBlur={onSelect}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
