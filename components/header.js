import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header role="navigation">
      <nav className="nav">
        <div className="nav__container">
          <Link href="/">
            <a>
              <img
                className="nav__logo"
                src="/static/images/logo-api.gouv.fr.svg"
                alt="Accueil de api.gouv.fr"
              />
            </a>
          </Link>

          <ul className="nav__links">
            <li id="signup-link" style={{ display: "none" }}>
              <a href="https://signup.api.gouv.fr">Mes demandes</a>
            </li>
            <li>
              <a href="/services">Tous les services</a>
            </li>
            <li>
              <a href="/apropos">À propos</a>
            </li>
            <li>
              <a href="/contact">Nous contacter</a>
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
          display: inline;
          margin: 0;
          padding: 0.5em 1em;
          list-style-type: none;
          text-align: right;
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
