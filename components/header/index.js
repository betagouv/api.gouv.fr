import React, { useEffect, useRef, Fragment } from 'react';
import Link from 'next/link';
import { throttle } from 'lodash';

import { ButtonLink } from '../../uiComponents/button';
import constants from '../../constants';
import './headerStyles.scss';
import { logDemanderApi } from '../../service/analytics';

export const HEADER_PAGE = {
  APIS: 'apis',
  FROM_SIGNUP: 'requests',
  SERVICES: 'services',
  ABOUT: 'about',
};

const HEADER = [
  {
    href: '/rechercher-api',
    txt: 'Découvrir les APIs du service public',
    key: HEADER_PAGE.APIS,
  },
  {
    href: '/services',
    txt: 'Voir les réalisations',
    key: HEADER_PAGE.SERVICES,
  },
  { href: '/apropos', txt: 'À propos', key: HEADER_PAGE.ABOUT },
];

const Header = ({ headerKey = 'home', filter = '' }) => {
  const header = useRef(null);

  useEffect(() => {
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header role="navigation" ref={header}>
      <nav className="nav">
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          aria-label="ouverture-menu"
        />
        <label className="hamburger-menu" htmlFor="menu-btn">
          <span />
          <span />
          <span />
        </label>
        <div className="nav__container">
          <Link href="/">
            <a className="nav__logo-wrapper">
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
                        <a
                          className="dont-apply-link-style"
                          href={`${item.href}`}
                        >
                          {item.txt}
                        </a>
                      </li>
                    )}
                  </Fragment>
                ))}
                <li className="external">
                  <ButtonLink
                    href={constants.links.mailto.REQUEST_API}
                    onClick={logDemanderApi}
                  >
                    Demander une API
                  </ButtonLink>
                </li>
              </>
            ) : (
              <li>
                <a
                  className="dont-apply-link-style"
                  href={`${constants.links.SIGNUP}`}
                >
                  Mes demandes
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
