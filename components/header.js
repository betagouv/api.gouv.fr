import React from "react";
import Link from "next/link";

import ButtonLink from "./ui/button-link";

const Header = () => {
  return (
    <header role="navigation">
      <nav className="nav">
        <div className="nav__container">
          <Link href="/">
            <a>
              <img
                className="nav__logo"
                src="/images/logo-api.gouv.fr.svg"
                alt="Accueil de api.gouv.fr"
              />
            </a>
          </Link>

          <ul className="nav__links">
            <li id="signup-link" style={{ display: "none" }}>
              <a href="https://signup.api.gouv.fr">Mes demandes</a>
            </li>
            <li>
              <a href="/services">Voir les réalisations</a>
            </li>
            <li>
              <a href="/apropos">À propos</a>
            </li>
            <li>
              <a href="/contact">Nous contacter</a>
            </li>
            <li className="external">
              <ButtonLink href="mailto:contact@api.gouv.fr?subject=Demande%20d%27une%20nouvelle%20API">
                Demander une API
              </ButtonLink>
              <ButtonLink
                href="https://github.com/betagouv/api.gouv.fr/blob/master/CONTRIBUTING.md#ajouter-une-api"
                alt
              >
                Partager votre API
              </ButtonLink>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        .nav {
          width: 100%;
          background: #fff;
          z-index: 100;
        }

        .nav__container {
          display: flex;
          flex: 1;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: center;
        }

        .nav__home,
        .nav__logo {
          height: 40px;
          padding: 1em;
          box-sizing: content-box;
        }

        .nav__links {
          display: inline-flex;
          margin: 0;
          padding: 0.5em 1em;
          list-style-type: none;
          align-items: center;
          flex-flow: wrap;
        }

        .nav__links li {
          padding: 0;
          display: inline;
          margin: 0 0.2em;
          line-height: 2em;
        }

        .nav__links a {
          padding: 0.4em 0.8em;
          border-radius: 3px;
        }

        .nav__links a:after {
          content: none;
        }

        .nav__links a:hover,
        .nav__links a:focus {
          background: #f0f0f0;
        }

        .side-nav,
        .button-collapse {
          display: none;
        }

        .nav a {
          color: #333;
          outline: none;
          cursor: pointer;
          text-decoration: none;
        }

        .nav {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        }

        .nav .external {
          display: inline-flex;
          justify-content: space-between;
          flex-flow: wrap;
        }

        @media (max-width: 550px) {
          .nav__links {
            padding-top: 0;
          }
        }

          .nav .external {
            display: inline-grid;
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
