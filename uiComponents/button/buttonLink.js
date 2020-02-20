import React from 'react';

import colors from '../../styles/colors';

const ButtonLink = ({ href, alt, rel, target, disabled, children, large }) => (
  <>
    <a
      rel={rel}
      target={target}
      className={`button-link ${alt ? 'alt' : 'default'} ${
        disabled ? 'disabled' : ''
      }
        ${large ? 'large' : 'small'}
      `}
      href={href}
    >
      <div className="content-wrapper">{children}</div>
    </a>
    <style jsx>{`
      a.button-link {
        display: inline-block;
        text-decoration: none !important;
      }

      .button-link > .content-wrapper {
        font-size: 1rem;
        padding: 8px 15px;
        background-color: ${colors.blue};
        border: 1px solid ${colors.blue};

        color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        vertical-align: baseline;
        user-select: none;
        transition: transform 100ms ease-in-out, box-shadow 100ms ease-in-out;
      }

      .button-link.disabled > .content-wrapper {
        pointer-events: none;
        cursor: default;
        background-color: ${colors.smartData}B0;
        border: 1px solid ${colors.smartData}B0;
      }

      .button-link.alt > .content-wrapper {
        color: ${colors.smartData};
        background-color: #fff;
        border: 1px solid ${colors.smartData};
      }
      .button-link.large > .content-wrapper {
        padding: 12px 20px;
        font-size: 1.15rem;
      }

      .button-link.alt.disabled > .content-wrapper {
        color: ${colors.smartData}B0;
        border: 1px solid ${colors.smartData}B0;
      }

      .button-link:hover > .content-wrapper {
        transform: translateY(-2px);
        box-shadow: 0px 6px 7px rgba(0, 0, 0, 0.25);
      }
    `}</style>
  </>
);

export default ButtonLink;
