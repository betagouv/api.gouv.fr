import React from 'react';

export const Question: React.FC<{}> = () => (
  <>
    <div
      role="dialog"
      aria-label="Une question"
      className="question-bottom-right layout-center"
    >
      <a className="dont-apply-link-style" href="/parcours-client">
        <div>
          <span>Une question</span>{' '}
          <span className="fr-fi-question-fill"></span>
        </div>
      </a>
    </div>
    <style jsx>{`
      .question-bottom-right {
        position: fixed;
        right: 60px;
        bottom: 60px;
        z-index: 100;
        font-family: 'Marianne', sans-serif;
      }

      .question-bottom-right > a {
        background-color: #000091;
        color: #fff;
        border-radius: 30px;
        padding: 15px 25px;
        font-size: 1.1rem;
        display: inline-block;
        color: #fff;
        text-decoration: none;
        box-shadow: 0px 4px 13px rgb(0 0 0 / 60%);
        transition: margin 100ms ease-in-out, box-shadow 100ms ease-in-out;
        margin-bottom: 0;
      }
      .question-bottom-right:hover > a {
        box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.3);
        margin-bottom: 5px;
      }

      .tag.closed {
        color: #914141;
        background-color: #ffe5e5;
      }
      .tag.open {
        color: #326f00;
        background-color: #cdf2c0;
      }
      @media only screen and (min-width: 1px) and (max-width: 600px) {
        .question-bottom-right {
          bottom: 50px;
          right: 10px;
        }
        .question-bottom-right > a {
          height: 60px;
          width: 60px;
          border-radius: 50px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .question-bottom-right span:not(.fr-fi-question-fill) {
          display: none;
        }
      }
    `}</style>
  </>
);
