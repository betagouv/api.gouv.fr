import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { throttle } from 'lodash';

import ButtonLink from './ui/button-link';
import constants from '../const';

const Header = () => {
  const header = useRef(null);

  const handleScroll = throttle(() => {
    if (!header || !header.current) {
      return;
    }
    const headerClasses = header.current.classList;
    const hasScrolledClass = headerClasses.contains('scrolled');
    if (
      (window.scrollY !== 0 && !hasScrolledClass) ||
      (window.scrollY === 0 && hasScrolledClass)
    ) {
      headerClasses.toggle('scrolled');
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header role="navigation" ref={header}>
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
            <li id="signup-link" style={{ display: 'none' }}>
              <a href={constants.SIGNUP_LINK}>Mes demandes</a>
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
              <ButtonLink href={constants.REQUEST_API_MAILTO_LINK}>
                Demander une API
              </ButtonLink>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        header {
          position: fixed;
          top: 0;
          z-index: 1000;
          width: 100%;
          border-bottom: 1px solid #fff;
        }
        header.scrolled {
          border-color: #efefef;
        }

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
          height: ${constants.HEADER_HEIGHT}px;
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

        .nav__links li:not(.external) {
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

        @media (max-width: 900px) {
          .nav__links,
          .external {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
