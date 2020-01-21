import React from "react";
import Link from "next/link";

import colors from "../styles/colors";

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
            <li>
              <a
                href="mailto:contact@api.gouv.fr?subject=Demande%20d%27une%20nouvelle%20API"
                className="button-link alt"
              >
                Demander une API
              </a>
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

        .nav a.button-link {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 9px 15px;
          margin: 0 0.4em;

          width: 162px;
          height: 38px;

          background: ${colors.smartData};
          color: #fff;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 4px;
        }

        .nav a.button-link.alt {
          color: ${colors.smartData};
          background: #fff;
        }

        @media (max-width: 550px) {
          .nav__links {
            padding-top: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
