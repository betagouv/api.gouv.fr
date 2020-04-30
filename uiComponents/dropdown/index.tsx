import React, { ChangeEvent } from 'react';

interface SelectOption {
  label: string;
  value: any;
}

interface IProps {
  selectOptions: SelectOption[];
  onChange: (newSelectedOption: number | null) => void;
  label?: string;
  width?: number;
  id?: string;
  placeholder?: string;
}

const Dropdown: React.FC<IProps> = ({
  onChange,
  label = null,
  selectOptions,
  placeholder = 'Choisissez une option',
  width = 250,
  id = 'dropdown',
}) => {
  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
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
      <select id={id} onChange={onSelect} onBlur={onSelect}>
        <option value={-1}>
          {placeholder || 'Veuillez selectionner une option'}
        </option>
        {selectOptions.map(selectOption => (
          <option key={selectOption.value} value={selectOption.value}>
            {selectOption.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
