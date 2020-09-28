import React from 'react';

const SIGNUP_URL =
  process.env.NEXT_PUBLIC_SIGNUP_URL || 'https://signup.api.gouv.fr';

/**
 * turns any link that match signup.api.gouv.fr/XYZ into $SIGNUP_URL/XYZ,
 * Used in staging
 */
const formatSignupLink = (link: string) => {
  if (link) {
    const pattern = /^https?:\/\/signup.api.gouv.fr(.*)/;
    const signup_url_parts = link.match(pattern) || [];
    if (signup_url_parts.length === 2) {
      return `${SIGNUP_URL}${signup_url_parts[1]}`;
    }
  }
  return link;
};

interface IProps {
  href?: string;
  alt?: boolean;
  rel?: string;
  target?: string;
  disabled?: boolean;
  size?: 'small' | null | 'large';
  onClick?: (() => void) | undefined;
  type?: 'button' | 'submit' | 'reset';
}

interface ILinkProps {
  href: string;
  alt?: boolean;
  rel?: string;
  target?: string;
  disabled?: boolean;
  size?: 'small' | null | 'large';
  onClick?: (() => void) | undefined;
}

interface IButtonProps {
  alt?: boolean;
  disabled?: boolean;
  size?: 'small' | null | 'large';
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
  size,
  onClick = () => {},
}) => (
  <a
    rel={rel}
    target={target}
    onClick={onClick}
    className={`dont-apply-link-style button-link ${alt ? 'alt' : 'default'} ${
      disabled ? 'disabled' : ''
    }
  ${size}
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
  size,
  disabled,
  children,
}) => (
  <button
    onClick={onClick}
    type={type}
    className={`dont-apply-link-style button-link ${alt ? 'alt' : 'default'} ${
      disabled ? 'disabled' : ''
    }
  ${size}
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
  size,
  type,
  onClick,
}) => {
  if (href) {
    return (
      <LinkAsAButton
        href={formatSignupLink(href)}
        rel={rel}
        target={target}
        alt={alt}
        disabled={disabled}
        children={children}
        size={size}
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
        size={size}
      />
    );
  }
  throw new Error('Should not happen');
};

export default ButtonLink;
