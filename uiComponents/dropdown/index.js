import React, { useState } from 'react';

import colors from '../../styles/colors';
import { randomId } from '../../utils';

const selectId = `${randomId(5)}-select`;

const Dropdown = ({
  onChange,
  label,
  selectOptions,
  placeholder,
  width = 250,
}) => {
  const onSelect = event => {
    try {
      onChange(parseInt(event.target.value, 10));
    } catch {}
  };

  return (
    <>
      <div className="dropdown-wrapper">
        <label htmlFor={selectId}>{label}</label>
        <select id={selectId} onChange={onSelect}>
          <option value={null}>
            {placeholder || 'Veuillez selectionner une option'}
          </option>
          {selectOptions.map((selectOption, index) => (
            <option key={selectOption.value} value={selectOption.value}>
              {selectOption.label}
            </option>
          ))}
        </select>
      </div>

      <style jsx>{`
        .dropdown-wrapper {
          width: ${width}px;
        }
        label {
          line-height: 18px;
          font-weight: 600;
          color: ${colors.darkestGrey};
          font-size: 0.9rem;
        }
        select {
          font-size: 1.1rem;
          height: 38px;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 4px;
          display: flex;
          padding: 0;
        }

        select:focus {
          outline: none;
          border-color: ${colors.blue};
        }
      `}</style>
    </>
  );
};

export default Dropdown;
