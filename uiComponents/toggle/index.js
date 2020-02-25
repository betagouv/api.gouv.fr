import React from 'react';

import './styles.scss';

const Toggle = ({ id, onChange, label, isToggled }) => {
  const onClick = () => {
    onChange(!isToggled);
  };

  return (
    <div className="toggle-wrapper">
      <div className="switch">
        <input
          type="checkbox"
          id={id || 'checkbox'}
          checked={isToggled}
          onChange={onClick}
        />
        <span className="slider" onClick={onClick} />
      </div>
      <label htmlFor={id || 'checkbox'}>{label}</label>
    </div>
  );
};

export default Toggle;
