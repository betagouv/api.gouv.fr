import React from 'react';
import constants from '../../constants';

const MagnifyingGlass: React.FC<{ color: string }> = ({ color }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 53 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M37.4285 34.9796L48.653 46.2041L46 48.8571L34.7755 37.6326M29.5714 29.3673C32.4633 26.4215 34.0708 22.4501 34.0422 18.3221C34.0135 14.1941 32.3512 10.2454 29.4187 7.3399C26.4862 4.4344 22.5223 2.80859 18.3942 2.81813C14.2661 2.82767 10.3098 4.47178 7.39077 7.39081C4.47175 10.3098 2.82764 14.2661 2.8181 18.3943C2.80856 22.5224 4.43437 26.4862 7.33987 29.4187C10.2454 32.3512 14.194 34.0136 18.3221 34.0422C22.4501 34.0708 26.4214 32.4633 29.3673 29.5714L46.7142 46.9184L29.5714 29.3673Z"
      stroke={color || constants.colors.blue}
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

export default MagnifyingGlass;
