import React, { Fragment } from 'react';

import { logCTA } from '../../utils/client/analytics';
import { apiLogo } from './logos';
import SurveyModule from '../surveyModule';
const DATAPASS_URL =
  process.env.NEXT_PUBLIC_DATAPASS_URL || 'https://datapass.api.gouv.fr';

export const HEADER_PAGE = {
  APIS: 'apis',
  FROM_SIGNUP: 'requests',
  SERVICES: 'services',
  GUIDES: 'guides',
  ABOUT: 'about',
};

const HEADER = [
  {
    href: '/rechercher-api',
    txt: 'Rechercher une API du service public',
    key: HEADER_PAGE.APIS,
  },
  {
    href: '/guides',
    txt: 'Comprendre les API',
    key: HEADER_PAGE.GUIDES,
  },
  { href: '/apropos', txt: 'À propos', key: HEADER_PAGE.ABOUT },
];

const Header = ({ headerKey = 'home' }) => {
  return (
    <header role="banner" className="fr-header">
      <div className="fr-header__body">
        <div className="fr-container">
          <div className="fr-header__body-row">
            <div className="fr-header__brand fr-enlarge-link">
              <div className="fr-header__brand-top">
                <div className="fr-header__logo">
                  <p className="fr-logo">
                    République
                    <br />
                    Française
                  </p>
                </div>
                <div className="fr-header__navbar">
                  <button
                    className="fr-btn--menu fr-btn"
                    data-fr-opened="false"
                    aria-controls="modal-833"
                    aria-haspopup="menu"
                    title="Menu"
                  >
                    Menu
                  </button>
                </div>
              </div>
              <div className="fr-header__service">
                <a
                  className="api-logo"
                  href="/"
                  title="Accueil - api.gouv.fr - République Française"
                >
                  {apiLogo}
                </a>
              </div>
            </div>
            <div className="fr-header__tools">
              <div className="fr-header__tools-links">
                <ul className="fr-links-group">
                  <li className="external">
                    <SurveyModule />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="fr-header__menu fr-modal"
        id="modal-833"
        aria-labelledby="button-834"
      >
        <div className="fr-container">
          <button className="fr-link--close fr-link" aria-controls="modal-833">
            Fermer
          </button>
          <div className="fr-header__menu-links"></div>
          <nav
            className="fr-nav"
            id="navigation-832"
            role="navigation"
            aria-label="Menu principal"
          >
            <ul className="fr-nav__list">
              {headerKey !== HEADER_PAGE.FROM_SIGNUP ? (
                <>
                  {HEADER.map(item => (
                    <Fragment key={item.href}>
                      <li
                        className={`fr-nav__item ${
                          headerKey === item.key ? 'current' : ''
                        }`}
                      >
                        <a className="fr-nav__link" href={`${item.href}`}>
                          {item.txt}
                        </a>
                      </li>
                    </Fragment>
                  ))}
                </>
              ) : (
                <li className="fr-nav__item">
                  <a className="fr-nav__link" href={`${DATAPASS_URL}`}>
                    Mes demandes
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        a.api-logo {
          display: block;
          width: 160px;
        }
      `}</style>
    </header>
  );
};

export default Header;
