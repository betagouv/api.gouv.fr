import React from 'react';

import constants from '../../constants';

interface ITitleProps {
  title: string;
  logo: string;
}

const Title: React.FC<ITitleProps> = ({ title, logo }) => (
  <>
    <div className="title">
      <span className="layout-center">
        <img
          src={`/images/api-logo/${logo}`}
          alt={title}
          className="ui image"
        />
      </span>
      <h1>{title}</h1>
    </div>
    <style jsx>{`
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
        flex-shrink: 0;
      }

      .title span {
        flex-shrink: 0;
        border-radius: 100%;
        width: 48px;
        height: 48px;
        background-color: #fff;
        overflow: hidden;
      }
      .title span > img {
        width: 100%;
      }

      .title h1 {
        margin: 30px 0.5rem 15px;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 43px;
        text-align: center;
        color: #fff;
      }
    `}</style>
  </>
);

interface ITaglineProps {
  tagline: string;
}

const Tagline: React.FC<ITaglineProps> = ({ tagline }) => (
  <>
    <h2 className="tagline">{tagline}</h2>
    <style jsx>{`
      .tagline {
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
        margin: 0 auto 15px;
        color: #fff;
      }

      .inline {
        padding: 0.5rem 0rem 0.5rem 1rem;
        text-align: left;
      }
    `}</style>
  </>
);

interface IProps {
  title: string;
  logo: string;
  tagline: string;
}

const PageHeader: React.FC<IProps> = ({ title, logo, tagline }) => (
  <section id="mission-statement">
    <a href="/rechercher-api" className="back-button dont-apply-link-style">
      ← Toutes les API
    </a>
    <div className="content-container content">
      <Title title={title} logo={logo} />
      <Tagline tagline={tagline} />
    </div>

    <style jsx>{`
      #mission-statement {
        background: ${constants.colors.backgroundBlueGradient};
        width: 100%;
        position: relative;
      }

      .content {
        padding: 5px 0 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .back-button {
        position: absolute;
        top: 20px;
        color: #fff;
        left: 20px;
      }
      .back-button:hover {
        text-decoration: underline;
      }
    `}</style>
  </section>
);

export default PageHeader;
