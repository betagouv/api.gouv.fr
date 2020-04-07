import React from 'react';
import Link from 'next/link';

import './footerStyles.scss';

const Footer = () => {
  return (
    <div role="contentinfo" id="footer">
      <div className="container">
        <div className="footer__logo">
          <Link href="/">
            <img
              src="/images/logo-api.gouv.fr-white.png"
              alt="logo api.gouv.fr"
            />
          </Link>
          <ul className="footer__social">
            <li>
              <a href="https://twitter.com/BetaGouv" title="Twitter">
                <img
                  src="/images/social/twitter.svg"
                  alt="Twitter"
                  className="icon icon-twitter"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/betagouv/api.gouv.fr" title="Github">
                <img
                  src="/images/social/github.svg"
                  alt="Github"
                  className="icon icon-github"
                />
              </a>
            </li>
            <li>
              <a href="/contact" title="Nous contacter">
                <img
                  src="/images/social/email.svg"
                  alt="Email"
                  className="icon icon-mail"
                />
              </a>
            </li>
          </ul>
        </div>
        <ul className="footer__links">
          <li>
            <h2>api.gouv.fr</h2>
          </li>
          <li>
            <a
              href="https://beta.gouv.fr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Une réalisation de beta.gouv.fr
            </a>
          </li>
          <li>
            <a
              href="https://numerique.gouv.fr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Une mission de la DINUM
            </a>
          </li>
          <li>
            <a
              href="https://github.com/betagouv/api.gouv.fr/blob/master/CONTRIBUTING.md"
              rel="noopener noreferrer"
              target="_blank"
            >
              Améliorer cette page
            </a>
          </li>
          <li>
            <a href="/mentions-legales">Mentions Légales</a>
          </li>
          <li>
            <a href="/vie-privee">Suivi d'audience & vie privée</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
