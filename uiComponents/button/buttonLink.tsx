import React, { PropsWithChildren } from 'react';

const DATAPASS_URL =
  process.env.NEXT_PUBLIC_DATAPASS_URL || 'https://datapass.api.gouv.fr';

/**
 * turns any link that match datapass.api.gouv.fr/XYZ into $DATAPASS_URL/XYZ,
 * Used in staging
 */
const formatDataPassLink = (link: string) => {
  if (link) {
    const pattern = /^https?:\/\/(signup|datapass).api.gouv.fr(.*)/;
    const datapass_url_parts = link.match(pattern) || [];
    if (datapass_url_parts.length === 3) {
      return `${DATAPASS_URL}${datapass_url_parts[2]}`;
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

const LinkAsAButton: React.FC<PropsWithChildren<ILinkProps>> = ({
  href,
  alt,
  rel,
  target,
  children,
  size,
  onClick = () => {},
}) => (
  <a
    rel={rel}
    target={target}
    onClick={onClick}
    className={`fr-btn ${alt ? 'fr-btn--secondary' : ''} ${
      !size ? '' : size === 'large' ? 'fr-btn--lg' : 'fr-btn--sm'
    }`}
    href={href}
  >
    <div className="content-wrapper">{children}</div>
  </a>
);

const ClassicButton: React.FC<PropsWithChildren<IButtonProps>> = ({
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
    className={`fr-btn ${alt ? 'fr-btn--secondary' : ''} ${
      size === 'large' ? 'fr-btn--lg' : 'fr-btn--sm'
    }`}
    disabled={!!disabled}
  >
    <div className="content-wrapper">{children}</div>
  </button>
);

const ButtonLink: React.FC<PropsWithChildren<IProps>> = ({
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
        href={formatDataPassLink(href)}
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
