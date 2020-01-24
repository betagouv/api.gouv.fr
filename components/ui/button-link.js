import React from "react";

import colors from "../../styles/colors";

const ButtonLink = ({ href, alt, children }) => (
  <>
    <a className={`button-link ${alt ? "alt" : "default"}`} href={href}>
      {children}
    </a>
    <style jsx>{`
      a.button-link {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 9px 15px;

        width: 162px;
        height: 38px;

        background: ${colors.smartData};
        color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
      }

      a.button-link.alt {
        color: ${colors.smartData};
        background: #fff;
        border: 1px solid ${colors.smartData};
      }
    `}</style>
  </>
);

export default ButtonLink;
