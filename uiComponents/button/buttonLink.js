import React from 'react';

import './buttonStyles.scss';

const LinkAsAButton = ({
  href,
  alt,
  rel,
  target,
  disabled,
  children,
  large,
}) => (
  <a
    rel={rel}
    target={target}
    className={`dont-apply-link-style button-link ${alt ? 'alt' : 'default'} ${
      disabled ? 'disabled' : ''
    }
  ${large ? 'large' : 'small'}
  `}
    href={href}
  >
    <div className="content-wrapper">{children}</div>
  </a>
);

const ClassicButton = ({ type, onClick, alt, large, disabled, children }) => (
  <button
    onClick={onClick}
    type={type}
    className={`dont-apply-link-style button-link ${alt ? 'alt' : 'default'} ${
      disabled ? 'disabled' : ''
    }
  ${large ? 'large' : 'small'}
  `}
  >
    <div className="content-wrapper">{children}</div>
  </button>
);

const ButtonLink = ({
  href,
  alt,
  rel,
  target,
  disabled,
  children,
  large,
  type,
  onClick,
}) => {
  if (href) {
    return (
      <LinkAsAButton
        href={href}
        rel={rel}
        target={target}
        alt={alt}
        disabled={disabled}
        children={children}
        large={large}
      />
    );
  }
  if (onClick || type) {
    return (
      <ClassicButton
        onClick={onClick}
        type={type}
        target={target}
        alt={alt}
        disabled={disabled}
        children={children}
        large={large}
      />
    );
  }
  throw new Error('Should not happen');
};

export default ButtonLink;
