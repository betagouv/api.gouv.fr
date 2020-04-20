import React from 'react';
interface IProps {
  href?: string;
  alt?: boolean;
  rel?: string;
  target?: string;
  disabled?: boolean;
  large?: boolean;
  onClick?: (() => void) | undefined;
  type?: 'button' | 'submit' | 'reset';
}

interface ILinkProps {
  href: string;
  alt?: boolean;
  rel?: string;
  target?: string;
  disabled?: boolean;
  large?: boolean;
  onClick?: (() => void) | undefined;
}

interface IButtonProps {
  alt?: boolean;
  disabled?: boolean;
  large?: boolean;
  onClick?: (() => void) | undefined;
  type: 'button' | 'submit' | 'reset' | undefined;
}

const LinkAsAButton: React.FC<ILinkProps> = ({
  href,
  alt,
  rel,
  target,
  disabled,
  children,
  large,
  onClick = () => {},
}) => (
  <a
    rel={rel}
    target={target}
    onClick={onClick}
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

const ClassicButton: React.FC<IButtonProps> = ({
  type,
  onClick,
  alt,
  large,
  disabled,
  children,
}) => (
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

const ButtonLink: React.FC<IProps> = ({
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
        onClick={onClick}
      />
    );
  }
  if (onClick || type) {
    return (
      <ClassicButton
        onClick={onClick}
        type={type}
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
