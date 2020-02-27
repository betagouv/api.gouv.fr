import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import globals from '../../const';

const Section = ({ id, title, children }) => {
  return (
    <section>
      <a className="hidden-anchor" id={id}>
        This is a hidden anchor. It is a trick to avoid having the header hiding
        the top of the page.
      </a>
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
          position: relative;
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
        a.hidden-anchor {
          display: block;
          position: absolute;
          top: -${parseInt(globals.layout.HEADER_HEIGHT, 10) + 15}px;
          visibility: hidden;
        }
      `}</style>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
