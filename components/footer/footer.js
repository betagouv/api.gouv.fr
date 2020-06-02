import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="footer">
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
            <h2>Le site</h2>
          </li>
          <li>
            <a href="/feuille-de-route">La feuille de route des APIs</a>
          </li>
          <li>
            <a href="/documentation">La documentation des APIs</a>
          </li>
          <li>
            <a href="/mentions-legales">Les mentions Légales</a>
          </li>
          <li>
            <a href="/vie-privee">Le suivi d'audience & de la vie privée</a>
          </li>
        </ul>
        <ul className="footer__links">
          <li>
            <h2>L’équipe</h2>
          </li>
          <li>
            <a href="/contact">Nous contacter</a>
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
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
