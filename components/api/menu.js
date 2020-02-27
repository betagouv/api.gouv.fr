import React from 'react';
import PropTypes from 'prop-types';

import constants from '../../const';

const MENU_OPTIONS = [
  {
    id: 'api-description',
    label: 'Description',
    hasNoDetails: true,
  },
  {
    id: 'access',
    label: 'Accès',
  },
  {
    id: 'contact',
    label: 'Support',
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
    label: 'Services',
    hasNoDetails: true,
  },
];

const Menu = ({ detail, selectedItem, select }) => {
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
            {!menu.hasNoDetails &&
              !detail[menu.id] &&
              menu.id !== 'partenaires' && (
                <div className="ui grey mini label">Non renseigné</div>
              )}
          </div>
        </div>
      ))}
      <style jsx>{`
        .menu {
          border-radius: 4px;
          max-width: 245px;
          display: flex;
          flex-direction: column;
          background-color: #fff;
          border: 2px solid ${constants.colors.lightGrey};
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
          transition: background 100ms ease-in-out, border 100ms ease-in-out;
          cursor: pointer;
        }
        .item:hover,
        .item.selected:hover {
          background-color: ${constants.colors.lightBlue};
        }
        .item.selected {
          border-left: 5px solid ${constants.colors.blue};
          background-color: ${constants.colors.lightestBlue};
        }
      `}</style>
    </div>
  );
};

Menu.propTypes = {
  detail: PropTypes.object.isRequired,
};

export default Menu;
