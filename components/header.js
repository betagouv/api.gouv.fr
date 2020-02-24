import React, { useEffect, useRef, Fragment } from 'react';
import Link from 'next/link';
import { throttle } from 'lodash';

import { ButtonLink } from '../uiComponents/button';
import constants from '../const';
import colors from '../styles/colors';

export const HEADER_PAGE = {
  APIS: 'apis',
  FROM_SIGNUP: 'requests',
  SERVICES: 'services',
  ABOUT: 'about',
  CONTACT: 'contact',
};

const HEADER = [
  {
    href: '/rechercher-api',
    txt: 'Découvrir les APIs de l’État',
    key: HEADER_PAGE.APIS,
  },
  {
    href: '/services',
    txt: 'Voir les réalisations',
    key: HEADER_PAGE.SERVICES,
  },
  { href: '/apropos', txt: 'À propos', key: HEADER_PAGE.ABOUT },
  {
    href: '/contact',
    txt: 'Nous contacter',
    key: HEADER_PAGE.CONTACT,
  },
];

const Header = ({ headerKey = 'home', filter = '' }) => {
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
            {headerKey !== HEADER_PAGE.FROM_SIGNUP ? (
              <>
                {HEADER.map(item => (
                  <Fragment key={item.href}>
                    {!item.hide && (
                      <li
                        id={item.id || ''}
                        className={`${headerKey === item.key ? 'current' : ''}`}
                      >
                        <a href={`${item.href}`}>{item.txt}</a>
                      </li>
                    )}
                  </Fragment>
                ))}
                <li className="external">
                  <ButtonLink href={constants.mailto.REQUEST_API_MAILTO_LINK}>
                    Demander une API
                  </ButtonLink>
                </li>
              </>
            ) : (
              <li>
                <a href={`${constants.SIGNUP_LINK}`}>Mes demandes</a>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <style jsx>{`
        header {
          position: fixed;
          top: 0;
          z-index: 1000;
          width: 100%;
          box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.2);
          transition: box-shadow 300ms ease-in;
        }
        header.scrolled {
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
        }

        header a {
          text-decoration: none;
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
        .nav__container > a:first-child {
          display: flex;
          align-items: center;
        }

        .nav__home,
        .nav__logo {
          height: 40px;
          padding: 0 14px;
          box-sizing: content-box;
        }

        .nav__links {
          display: inline-flex;
          margin: 0;
          padding: 0em 1em;
          list-style-type: none;
          align-items: center;
          flex-flow: wrap;
        }

        .nav__links > li:not(.external) {
          position: relative;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          height: ${constants.HEADER_HEIGHT}px;
        }

        .nav__links li:after {
          content: '';
          position: absolute;
          bottom: 0;
          margin: auto;
          width: 0%;
          height: 3px;
          background-color: ${colors.blue};
          transition: width 200ms ease-in-out, opacity 200ms ease-in-out;
          opacity: 0;
        }
        .nav__links li.current:after {
          width: 58%;
          opacity: 1;
        }
        .nav__links li:not(.current):not(.external):hover:after {
          width: 58%;
          opacity: 1;
        }

        .nav__links a {
          padding: 8px 10px;
          margin: 0 5px;
          border-radius: 3px;
        }

        .nav__links a:after {
          content: none;
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
