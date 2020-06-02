import React from 'react';

import constants from '../../constants';

const MENU_OPTIONS = [
  {
    id: 'api-description',
    label: 'Description',
  },
  {
    id: 'access',
    label: 'Conditions d’accès',
  },
  {
    id: 'contact',
    label: 'Contact & support',
  },
  {
    id: 'monitoring',
    label: 'Supervision',
  },
  {
    id: 'rate_limiting',
    label: "Limite d'usage",
  },
  {
    id: 'partenaires',
    label: 'Partenaires',
  },
  {
    id: 'doc_tech',
    label: 'Documentation technique',
  },
  {
    id: 'services',
    label: 'Réalisations',
  },
];

const Menu = ({ selectedItem, select }) => {
  const onKeyDown = (keyEvent, id) => {
    // toggle on Space or Enter
    if (keyEvent.keyCode === 13) {
      select(id);
    }
  };
  return (
    <div className="menu">
      {MENU_OPTIONS.map(menu => (
        <div key={menu.id}>
          <div
            className={`item ${selectedItem === menu.id && 'selected'}`}
            role="button"
            tabIndex={0}
            onKeyDown={e => onKeyDown(e, menu.id)}
            onClick={() => select(menu.id)}
          >
            {menu.label}
          </div>
        </div>
      ))}
      <style jsx>{`
        .menu {
          border-radius: 8px;
          max-width: 245px;
          display: flex;
          flex-direction: column;
          background-color: #fff;
          border: 2px solid ${constants.colors.lightGrey};
          overflow: hidden;
        }
        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          padding-left: 35px;
          font-size: 1rem;
          line-height: 20px;
          color: black;
          cursor: pointer;
          position: relative;
          border: none;
        }
        .item:hover,
        .item:focus {
          background-color: ${constants.colors.lightestBlue};
        }
        .item.selected:before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 20px;
          left: 15px;
          position: absolute;
          background-color: ${constants.colors.blue};
        }
        .item.selected {
          background-color: ${constants.colors.lightBlue};
        }
      `}</style>
    </div>
  );
};

export default Menu;
