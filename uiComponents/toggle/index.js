import React from 'react';

const Toggle = ({ id, onChange, label, isToggled = false }) => {
  const onClick = () => {
    onChange(!isToggled);
  };

  const onKeyDown = keyEvent => {
    // toggle on Space or Enter
    if (keyEvent.keyCode === 13) {
      onClick();
    }
  };

  return (
    <div
      className="toggle-wrapper"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={onKeyDown}
      role="checkbox"
      aria-checked={isToggled}
      aria-labelledby={`${id || 'checkbox'}-label`}
    >
      <div className="switch" id={id || 'checkbox'}>
        <span className="slider" />
      </div>
      <label htmlFor={`${id || 'checkbox'}-label`}>{label}</label>
    </div>
  );
};

export default Toggle;
