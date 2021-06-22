import React, { PropsWithChildren } from 'react';

const ExternalLink: React.FC<PropsWithChildren<{ href: string }>> = props => (
  <a href={props.href} target="_blank" rel="noreferrer noopener">
    {props.children}&nbsp;
    <style jsx>{`
      svg {
        margin: 0 0 2px 2px;
      }
    `}</style>
  </a>
);

export default ExternalLink;
