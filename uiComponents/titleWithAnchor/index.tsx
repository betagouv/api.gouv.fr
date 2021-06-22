import React, { PropsWithChildren } from 'react';
import { normalize, uuid } from '../../utils';
import constants from '../../constants';

const turnStringToId = (str: string) => {
  return normalize(str.toString().toLowerCase().split(' ').join('-'));
};

const Anchor: React.FC<{ id: string }> = ({ id }) => (
  <>
    <a
      href={`#${id}`}
      aria-hidden="true"
      tabIndex={-1}
      className="header-anchor dont-apply-link-style"
    >
      #
    </a>
    <style jsx>{`
      a.header-anchor {
        font-size: 0.9em;
        float: left;
        margin-left: -0.87em;
        padding-right: 0.23em;
        text-decoration: none;
        color: ${constants.colors.blue};
      }
    `}</style>
  </>
);

const HiddenAnchor: React.FC<{ id: string }> = ({ id }) => (
  <>
    <a className="hidden-anchor" id={id}>
      This is a hidden anchor. It is a trick to avoid having the header hiding
      the top of the page.
    </a>

    <style jsx>{`
      a.hidden-anchor {
        display: block;
        position: absolute;
        top: 0;
        visibility: hidden;
      }
    `}</style>
  </>
);

const H2WithAnchor: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const id = turnStringToId((children as string) || uuid());

  return (
    <div>
      <HiddenAnchor id={id} />
      <h2 className="ui dividing header">
        <div>
          <Anchor id={id} />
        </div>
        {children}
      </h2>

      <style jsx>{`
        div {
          margin-top: 2em;
          position: relative;
        }
        h2 > div {
          opacity: 0;
        }
        h2:hover > div {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

const H3WithAnchor: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const id = turnStringToId((children as string) || uuid());

  return (
    <div>
      <div>
        <HiddenAnchor id={id} />
      </div>
      <h3 className="ui dividing header">
        <div>
          <Anchor id={id} />
        </div>
        {children}
      </h3>

      <style jsx>{`
        div {
          margin-top: 2em;
          position: relative;
        }
        h3 > div {
          opacity: 0;
        }
        h3:hover > div {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export { H2WithAnchor, H3WithAnchor };
