import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
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
              href="https://etatplateforme.modernisation.gouv.fr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Un site de l'État plateforme
            </a>
          </li>
          <li>
            <a
              href="https://github.com/betagouv/api.gouv.fr/edit/master/{{ page.path }}"
              rel="noopener noreferrer"
              target="_blank"
            >
              Améliorer cette page
            </a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .footer a {
          opacity: 0.4;
        }

        .footer a:hover,
        .footer a:focus {
          opacity: 1;
        }

        .footer {
          background: #26353f;
          color: #fff;
          padding: 2em 0;
        }

        .footer .container {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
        }

        .footer ul {
          list-style-type: none;
          padding: 0;
        }

        .footer__social {
          margin-top: 1em;
        }

        .footer__social li {
          display: inline;
          margin-right: 1em;
        }

        .footer__social .icon {
          width: 35px;
          height: 35px;
          fill: #fff;
        }

        .footer__links {
          margin: 0;
          line-height: 2em;
        }

        .footer__links h2 {
          margin-top: 0;
          margin-bottom: 0.5em;
        }

        .footer__links a {
          color: #fff;
        }

        .footer__logo {
          width: 300px;
          height: auto;
        }

        .footer__logo img {
          width: 100%;
        }

        @media (max-width: 999px) {
          .footer .container {
            flex-direction: column;
          }
        }

        .footer .container {
          position: relative;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer .container h1:first-of-type {
          margin-top: 0;
        }

        .footer .article__container {
          max-width: 35em;
        }

        @media (min-width: 400px) {
          .footer .container {
            width: 85%;
            padding: 0;
          }
        }

        @media (min-width: 550px) {
          .footer .container {
            width: 80%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
