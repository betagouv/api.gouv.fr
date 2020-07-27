import React, { PropsWithChildren } from 'react';
import constants from '../../constants';

const Quote: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <div className="quote-wrapper">
        <div>
          <div className="medaillon">
            <img src="/images/guide/harold.jpg" alt="" />
          </div>
          <div>
            <div>Roscoe Soulabranche</div>
            <i>CEO de Peuplier Consulting</i>
          </div>
        </div>
        <div>{children}</div>
      </div>
      <style jsx>{`
        .quote-wrapper {
          background-color: ${constants.colors.blue};
          padding: 25px 40px;
          margin: 25px;
          color: #fff;
          border-radius: 5px;
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
        }

        .quote-wrapper > div:last-of-type {
          font-style: italic;
          margin-left: 15px;
        }

        .quote-wrapper > div:first-of-type {
          text-align: center;
          font-size: 0.9rem;
        }

        .quote-wrapper > div:first-of-type > .medaillon {
          content: '';
          border-radius: 100px;
          flex-shrink: 0;
          width: 150px;
          height: 150px;
          margin: 15px;
          background-color: #fff;
          overflow: hidden;
          border: 5px solid #fff;
        }
        .quote-wrapper > div:first-of-type > .medaillon > img {
          width: 100%;
        }
        .quote-wrapper:after {
          content: '”';
          font-size: 30rem;
          font-style: none;
          position: absolute;
          right: 10px;
          bottom: -20px;
          color: #fff;
          opacity: 0.1;
        }
      `}</style>
    </>
  );
};

export default Quote;
