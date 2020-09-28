import React from 'react';
import {
  twitter,
  facebook,
  mail,
  linkedin,
} from '../../uiComponents/icon/socialMedia';
import constants from '../../constants';

interface IProps {
  href: string;
  title?: string;
}

const Share: React.FC<IProps> = ({ href, title = '' }) => (
  <div className="container social-network-icons">
    <a
      href={`https://twitter.com/intent/tweet?url=${href}&text=${title}`}
      rel="noreferrer noopener"
      target="_blank"
      className="dont-apply-link-style"
    >
      {twitter}
    </a>
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${href}`}
      rel="noreferrer noopener"
      target="_blank"
      className="dont-apply-link-style"
    >
      {facebook}
    </a>
    <a
      href={`https://www.linkedin.com/shareArticle?mini=true&url=${href}&title=${title}`}
      rel="noreferrer noopener"
      target="_blank"
      className="dont-apply-link-style"
    >
      {linkedin}
    </a>
    <a
      href={`mailto:info@example.com?&subject=${title}&body=${href}`}
      rel="noreferrer noopener"
      target="_blank"
      className="dont-apply-link-style"
    >
      {mail}
    </a>
    <style global jsx>{`
      .social-network-icons.container {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
      }
      .social-network-icons a {
        background-color: ${constants.colors.grey};
        border-radius: 2px;
        display: flex;
        padding: 3px;
        margin: 1px;
        transition: transform 100ms ease-in-out;
      }
      .social-network-icons a:hover {
        transform: translateY(-3px);
      }
      .social-network-icons a,
      .social-network-icons a svg {
        width: 15px;
        height: 15px;
      }
    `}</style>
  </div>
);

export default Share;
