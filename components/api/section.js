import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Section = ({ id, title, children }) => {
  return (
    <section id={id}>
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
