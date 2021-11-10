import React, { ChangeEvent } from 'react';

interface SelectOption {
  label: string;
  value: any;
}

interface IProps {
  selectOptions: SelectOption[];
  onChange: (newSelectedOption: any) => void;
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
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div
      className="dropdown-wrapper"
      style={{ width: '100%', maxWidth: `${width}px` }}
    >
      {label && (
        <label className="fr-label" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        className="fr-select"
        id={id}
        name="select"
        onChange={onSelect}
        onBlur={onSelect}
      >
        <option value={-1}>
          {placeholder || 'Veuillez selectionner une option'}
        </option>
        {selectOptions.map(selectOption => (
          <option
            key={selectOption.value + selectOption.label}
            value={selectOption.value}
          >
            {selectOption.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
