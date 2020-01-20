import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

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

const Menu = ({ detail }) => {
  return (
    <div className="ui stackable container menu">
      <Link href="#api-description">
        <a className="header item">Description</a>
      </Link>
      {MENU_OPTIONS.map(menu => (
        <div key={menu.id}>
          <Link href={`#${menu.id}`}>
            <a className="item">
              {menu.label}
              {!detail[menu.id] && menu.id !== "partenaires" && (
                <div className="ui grey mini label">Non renseigné</div>
              )}
            </a>
          </Link>
        </div>
      ))}

      <Link href="#services">
        <a className="item">Services</a>
      </Link>
    </div>
  );
};

Menu.propTypes = {
  detail: PropTypes.object.isRequired
};

export default Menu;
