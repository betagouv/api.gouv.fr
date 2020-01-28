import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Router from "next/router";
import {throttle} from 'lodash'

const AVERAGE_HEADER_HEIGHT = 30;

const Section = ({ id, title, children }) => {
  const refSection = useRef()

  const handleScroll = throttle(() => {
    const offsetTop = refSection.current.offsetTop + AVERAGE_HEADER_HEIGHT;
    const offsetBottom = offsetTop + refSection.current.offsetHeight;
    const hash = window.location.hash ? window.location.hash.substr(1) : null;

    if (
      hash !== id &&
      window.scrollY > offsetTop &&
      window.scrollY < offsetBottom
    ) {
      const {
        router: { asPath }
      } = Router;
      const as = `${asPath.split("#")[0]}#${id}`;
      Router.push(asPath, as, {shallow: true});
      window.scrollTo(0, offsetTop);
    }
    // approx 8 frames
  }, 16 * 8);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <section ref={refSection} id={id}>
      <h2 className="ui dividing header">
        <Link href={`#${id}`}>
          <a aria-hidden="true" className="header-anchor">
            #
          </a>
        </Link>
        {title}
      </h2>

      {children}

      <style jsx>{`
        section {
          margin-top: 2em;
        }

        a.header-anchor {
          font-size: 0.9em;
          float: left;
          margin-left: -0.87em;
          padding-right: 0.23em;
          opacity: 0;
          text-decoration: none;
        }

        h2:hover .header-anchor {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
