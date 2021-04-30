import React from 'react';
import Link from 'next/link';

import { apiLogo, republiqueFrLogo, githubLogo } from './logos';

const DocHeader = () => (
  <header>
    <nav className="nav">
      <input
        className="menu-btn"
        type="checkbox"
        id="menu-btn"
        aria-label="ouverture-menu"
      />

      <div className="nav__container">
        <Link href="/documentation">
          <a
            className="nav__logo-wrapper"
            title="Retourner à l’accueil de la documentation des API du service public"
          >
            <span className="nav__logo marianne">{republiqueFrLogo}</span>
            <span className="nav__logo apigouv">
              {apiLogo}
              <span className="doc-subtitle">Documentation Technique</span>
            </span>
          </a>
        </Link>
      </div>
      <a
        href="https://github.com/betagouv/api.gouv.fr/"
        className="github-corner dont-apply-link-style"
        aria-label="Code source sur GitHub"
        target="_blank"
        rel="noreferrer noopener"
      >
        {githubLogo}
      </a>
    </nav>
  </header>
);

export default DocHeader;
