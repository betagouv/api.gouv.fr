import React from 'react';
import constants from '../../constants';

const illu = (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <path d="M5273.1 2400.1v-2c0-2.8-5-4-9.7-4s-9.7 1.3-9.7 4v2a7 7 0 002 4.9l5 4.9c.3.3.4.6.4 1v6.4c0 .4.2.7.6.8l2.9.9c.5.1 1-.2 1-.8v-7.2c0-.4.2-.7.4-1l5.1-5a7 7 0 002-4.9zm-9.7-.1c-4.8 0-7.4-1.3-7.5-1.8.1-.5 2.7-1.8 7.5-1.8s7.3 1.3 7.5 1.8c-.2.5-2.7 1.8-7.5 1.8z" />
      <path d="M5268.4 2410.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1h-4.3zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1zM5272.7 2417h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.5-.4-1-1-1z" />
      <path d="M92.4 2.5H7.6a4.7 4.7 0 00-4.7 4.8v65.5c0 2.6 2.1 4.8 4.8 4.8h32.9v8.7h-4.1a9 9 0 00-8.9 8.9c0 1.3 1.1 2.4 2.4 2.4h40.3c1.3 0 2.4-1.1 2.4-2.4a9 9 0 00-8.9-8.9h-4.1v-8.7h32.9c2.6 0 4.8-2.1 4.8-4.8V7.3c-.3-2.7-2.4-4.8-5-4.8zM50 72.4a3.3 3.3 0 01-3.3-3.3c0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zm37.5-11.6h-75V12.1h75v48.7z" />
      <path d="M21.7 54.8h10.5c.6 0 .9-.3.9-.9 0-.3.6-7.5.6-10.7v-1.1l2.8 1.9c.5.3 1.1.5 1.6.5s.9-.1 1.3-.3l7-3.6a3 3 0 001.3-3.9c-.3-.6-.8-1-1.3-1.3l1.8-13.3c.1-.8-.4-1.5-1.2-1.6-.8-.1-1.5.4-1.6 1.2l-1.9 13.8-5.2 2.6-6.4-4.3-1.7-.9c-1.9-.6-6.9-1.1-8.3 2.2-1.5 3.4-1.2 12.3-1.2 18.6.1.7.4 1.1 1 1.1z" />
      <circle cx="28" cy="24.8" r="6.4" />
      <path d="M57 52h19.3a2.8 2.8 0 100-5.6H57a2.8 2.8 0 100 5.6zM57 39.3h19.3a2.8 2.8 0 100-5.6H57a2.8 2.8 0 100 5.6zM57 26.5h19.3c1.5 0 2.8-1.2 2.8-2.8S77.9 21 76.3 21H57c-1.5 0-2.8 1.2-2.8 2.8s1.2 2.7 2.8 2.7z" />
    </svg>
    <style jsx>{`
      svg {
        width: 100%;
        max-width: 60px;
        display: block;
        fill: ${constants.colors.blue};
        opacity: 0.15;
      }
    `}</style>
  </>
);

interface IProps {
  title: string;
  href: string;
  image?: string;
  labels?: string[];
}

const RichLink: React.FC<IProps> = ({ title, href, image, labels = [] }) => (
  <>
    <a className="rich-link-wrapper dont-apply-link-style" href={href}>
      <div className="miniature layout-center">
        {image ? <img src={image} alt="" /> : illu}
      </div>
      <div className="title layout-center">
        <div>{title}</div>
      </div>
      {labels.length > 0 && (
        <div className="labels layout-center">
          {labels.map(label => (
            <div>
              <b>{label}</b>
            </div>
          ))}
        </div>
      )}
    </a>
    <style jsx>{`
      .rich-link-wrapper {
        border-radius: 4px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
        transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding: 0;
      }

      .rich-link-wrapper:hover {
        transform: translateY(-8px);
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
      }

      .rich-link-wrapper > div.title {
        flex-grow: 1;
        padding: 8px;
      }
      .title > div {
        font-weight: bold;
        text-align: center;
      }
      .miniature {
        margin: 0;
        padding: 0;
        height: 100px;
        background-color: ${constants.colors.lightestBlue};
      }
      .miniature > img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }

      .labels {
        flex-wrap: wrap;
        background: ${constants.colors.lightestGrey};
        border-top: 1px solid ${constants.colors.lightGrey};
        padding: 5px;
      }

      .labels > div {
        font-size: 0.7rem;
        background-color: ${constants.colors.lightGrey};
        color: ${constants.colors.darkGrey};
        border-radius: 4px;
        padding: 0 4px;
        margin: 3px;
        flex-shrink: 0;
      }
    `}</style>
  </>
);

export default RichLink;
