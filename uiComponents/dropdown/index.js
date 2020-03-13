import React from 'react';

import './styles.scss';

const Dropdown = ({
  onChange,
  label,
  selectOptions,
  placeholder,
  width = 250,
  id,
}) => {
  const onSelect = event => {
    if (event.target.value === '-1') {
      onChange(null);
      return;
    }
    const index = parseInt(event.target.value, 10);
    const label = selectOptions[index].label;
    onChange(label);
  };

  return (
    <div className="dropdown-wrapper" style={{ width: `${width}px` }}>
      <label htmlFor={id || 'dropdown'}>{label}</label>
      <select id={id || 'dropdown'} onChange={onSelect} onBlur={onSelect}>
        <option value={-1}>
          {placeholder || 'Veuillez selectionner une option'}
        </option>
        {selectOptions.map((selectOption, index) => (
          <option key={selectOption.value} value={selectOption.value}>
            {selectOption.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
