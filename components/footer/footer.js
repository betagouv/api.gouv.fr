import React from 'react';
import Link from 'next/link';
import constants from '../../constants';

const Footer = () => {
  return (
    <div id="bottom-footer">
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
              <a href="https://twitter.com/apigouv" title="Twitter">
                <img
                  src="/images/social/twitter.svg"
                  alt="Twitter"
                  className="icon icon-twitter"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/api-gouv-fr/"
                title="Linkedin"
              >
                <img
                  src="/images/social/linkedin.svg"
                  alt="Linkedin"
                  className="icon icon-linkedin"
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
            <a href="/feuille-de-route">Feuille de route des API</a>
          </li>
          <li>
            <a href={constants.links.ADD_API}>Ajouter une nouvelle API</a>
          </li>
          <li>
            <a href="/statistiques">Chiffres clés</a>
          </li>
          <li>
            <a href="/documentation">Documentation des API</a>
          </li>
          <li>
            <a href="/mentions-legales">Mentions Légales</a>
          </li>
          <li>
            <a href="/vie-privee">Audience & vie privée</a>
          </li>
        </ul>
        <ul className="footer__links">
          <li>
            <h2>L’équipe</h2>
          </li>
          <li>
            <a href="/equipe">Qui sommes-nous ?</a>
          </li>
          <li>
            <a href="/contact">Nous contacter</a>
          </li>
          <li>
            <a
              href="https://beta.gouv.fr/recrutement/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Nous rejoindre
            </a>
          </li>
        </ul>
        <ul className="footer__links">
          <li>
            <h2>Les partenaires</h2>
          </li>
          <li>
            <a
              href="https://beta.gouv.fr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              beta.gouv.fr
            </a>
          </li>
          <li>
            <a
              href="https://www.etalab.gouv.fr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Etalab
            </a>
          </li>
          <li>
            <a
              href="https://numerique.gouv.fr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              La DINUM
            </a>
          </li>
          <li>
            <a href="/producteurs">Les producteurs d’API</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
