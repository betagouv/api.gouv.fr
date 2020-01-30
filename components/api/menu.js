import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import colors from "../../styles/colors";

const MENU_OPTIONS = [
  {
    id: "access",
    label: "Accès"
  },
  {
    id: "contact",
    label: "Support"
  },
  {
    id: "monitoring",
    label: "Supervision"
  },
  {
    id: "partenaires",
    label: "Partenaires"
  },
  {
    id: "doc_tech",
    label: "Documentation technique"
  },
  {
    id: "rate_limiting",
    label: "Limite d'usage"
  }
];

const Menu = ({ detail, selected }) => {
  return (
    <div className="menu">
      <Link href="#api-description">
        <a
          className={`item ${selected === "api-description" ? "selected" : ""}`}
        >
          Description
        </a>
      </Link>
      {MENU_OPTIONS.map(menu => (
        <Link key={menu.id} href={`#${menu.id}`}>
          <a className={`item ${selected === menu.id ? "selected" : ""}`}>
            {menu.label}
            {!detail[menu.id] && menu.id !== "partenaires" && (
              <div className="ui grey mini label">Non renseigné</div>
            )}
          </a>
        </Link>
      ))}
      <Link href="#services">
        <a className={`item ${selected === "services" ? "selected" : ""}`}>
          Services
        </a>
      </Link>

      <style jsx>{`
        .menu {
          position: sticky;
          top: 2em;
          max-width: 245px;
          display: flex;
          flex-direction: column;
          background-color: #fff;
          box-shadow: 0.5px 0px 4px rgba(0, 0, 0, 0.25);
        }

        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1em;
          font-weight: bold;
          font-size: 14px;
          line-height: 18px;
          color: black;
        }

        .item:hover {
          background-color: ${colors.smartData};
          color: #fff;
        }

        .item.selected {
          border-left: 7px solid ${colors.smartData};
          border-bottom: 0.25px solid ${colors.smartData};
        }
      `}</style>
    </div>
  );
};

Menu.propTypes = {
  detail: PropTypes.object.isRequired
};

export default Menu;
