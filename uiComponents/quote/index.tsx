import React, { PropsWithChildren } from 'react';
import constants from '../../constants';

interface IProps {
  logo: string;
  who: string;
  title: string;
  link: string;
}

const Quote: React.FC<PropsWithChildren<IProps>> = ({
  children,
  logo,
  who,
  title,
  link,
}) => {
  return (
    <>
      <div className="quote-wrapper">
        <div>
          <div className="medaillon">
            <img src={logo} alt="" />
          </div>
          <div>
            <div>{who}</div>
            <i>{title}</i>
          </div>
        </div>
        <div>
          {children}

          {link && (
            <div className="layout-right">
              <a href={link} target="_blank" rel="noopener noreferrer">
                ⇢ Lire la suite du témoignage
              </a>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .quote-wrapper {
          background-color: ${constants.colors.blue};
          padding: 0 40px;
          margin: 25px 0;
          color: #fff;
          border-radius: 5px;
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
        }

        .quote-wrapper > div:first-of-type {
          text-align: center;
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          font-size: 0.9rem;
          line-height: 1.2rem;
          margin-bottom: 10px;
        }

        .quote-wrapper > div:first-of-type > .medaillon {
          content: '';
          border-radius: 100px;
          flex-shrink: 0;
          width: 70px;
          height: 70px;
          margin: 15px;
          background-color: #fff;
          overflow: hidden;
          border: 5px solid #fff;
        }
        .quote-wrapper > div:first-of-type > .medaillon > img {
          width: 100%;
        }

        .quote-wrapper > div:last-of-type {
          font-style: italic;
          margin: 40px 10px 40px 50px;
          z-index: 1;
          position: relative;
        }
        .quote-wrapper > div:last-of-type a {
          color: white;
        }
        .quote-wrapper > div:last-of-type:before {
          content: '“';
          font-size: 6rem;
          font-style: initial;
          position: absolute;
          top: 0px;
          left: -40px;
          color: #fff;
          opacity: 0.1;
          z-index: 0;
        }

        .quote-wrapper > div:last-of-type:after {
          content: '”';
          font-size: 6rem;
          font-style: initial;
          position: absolute;
          right: -30px;
          bottom: 10px;
          color: #fff;
          opacity: 0.1;
          z-index: 0;
        }
      `}</style>
    </>
  );
};

export default Quote;
