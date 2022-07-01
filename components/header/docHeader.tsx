import React from 'react';

import { apiLogo } from './logos';
import { logCTA } from '../../utils/client/analytics';
import SurveyModule from '../surveyModule';

const DocHeader = () => (
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
              <p className="fr-header__service-tagline">
                Documentation technique
              </p>
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
        ></nav>
      </div>
    </div>

    <style jsx>{`
      a.api-logo {
        display: block;
        width: 140px;
      }

      .fr-header__service-tagline {
        font-weight: bold;
        font-size: 0.8rem;
        font-variant: small-caps;
      }
    `}</style>
  </header>
);

export default DocHeader;
