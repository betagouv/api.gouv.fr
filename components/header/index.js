import React, { useEffect, useRef, Fragment, useState } from 'react';
import Link from 'next/link';
import { throttle } from 'lodash';

import { ButtonLink } from '../../uiComponents/button';
import constants from '../../const';
import './headerStyles.scss';

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
        <label class="hamburger-menu" htmlFor="menu-btn">
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
                  <ButtonLink href={constants.mailto.REQUEST_API_MAILTO_LINK}>
                    Demander une API
                  </ButtonLink>
                </li>
              </>
            ) : (
              <li>
                <a
                  className="dont-apply-link-style"
                  href={`${constants.SIGNUP_LINK}`}
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
