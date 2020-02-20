import React, { useState } from 'react';

import colors from '../../styles/colors';

const Toggle = ({ onChange, label }) => {
  const [isToggled, setIsToggle] = useState(false);

  const onClick = () => {
    const newState = !isToggled;
    setIsToggle(newState);
    onChange(newState);
  };

  return (
    <>
      <div className="wrapper">
        <div className="switch">
          <input
            type="checkbox"
            id="checkbox"
            checked={isToggled}
            onChange={onClick}
          />
          <span className="slider" onClick={onClick}></span>
        </div>
        <label htmlFor="checkbox">{label}</label>
      </div>
      <style jsx>
        {`
          .wrapper {
            cursor: pointer;
            display: flex;
          }

          /* The switch - the box around the slider */
          .switch {
            flex-shrink: 0;
            position: relative;
            display: inline-block;
            width: 35px;
            height: 20px;
          }

          /* Hide default HTML checkbox */
          .switch input {
            opacity: 0;
            width: 0;
            height: 0;
          }

          /* The slider */
          .slider {
            border-radius: 34px;
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border: 1px solid #ccc;
            -webkit-transition: 0.15s;
            transition: 0.15s;
          }

          .slider:before {
            border-radius: 50%;
            position: absolute;
            content: '';
            height: 14px;
            width: 14px;
            left: 2px;
            bottom: 2px;
            background-color: #ccc;
            -webkit-transition: 0.15s;
            transition: 0.15s;
          }

          input:checked + .slider {
            background-color: ${colors.blue};
            border-color: transparent;
          }

          input:checked + .slider:before {
            background-color: #fff;
          }

          input:focus + .slider {
            box-shadow: 0 0 1px ${colors.blue};
          }

          input:checked + .slider:before {
            -webkit-transform: translateX(14px);
            -ms-transform: translateX(14px);
            transform: translateX(14px);
          }

          label {
            margin-left: 5px;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default Toggle;
