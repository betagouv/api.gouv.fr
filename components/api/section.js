import constants from '../../constants';

const Section = ({ id, title, children }) => {
  return (
    <section>
      <a className="hidden-anchor" id={id}>
        This is a hidden anchor. It is a trick to avoid having the header hiding
        the top of the page.
      </a>
      <h2 className="ui dividing header">
        <a
          href={`#${id}`}
          aria-hidden="true"
          tabIndex="-1"
          className="header-anchor"
        >
          #
        </a>
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
          color: ${constants.colors.blue};
        }

        h2:hover .header-anchor {
          opacity: 1;
        }
        a.hidden-anchor {
          display: block;
          position: absolute;
          top: 0;
          visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default Section;
