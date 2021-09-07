import React from 'react';

import constants from '../../constants';

interface IProps {
  title: string;
  logo: string;
  tagline: string;
  owner: string;
  owner_acronym?: string;
  owner_slug: string;
}

const PageHeader: React.FC<IProps> = ({
  title,
  tagline,
  owner,
  owner_acronym,
  owner_slug,
}) => (
  <section id="mission-statement">
    <div className="fr-container">
      <div className="breadcrumb">
        <a href="/rechercher-api" className="dont-apply-link-style">
          ⇠ Toutes les API
        </a>
      </div>
      <div className="content">
        <h1>{title}</h1>
        <i>
          Producteur :{' '}
          <a
            className="dont-apply-link-style"
            href={`/producteurs/${owner_slug}`}
          >
            {owner_acronym ? owner_acronym : owner}
          </a>
        </i>
        <h2 className="tagline">{tagline}</h2>
      </div>
    </div>

    <style jsx>{`
      #mission-statement {
        background: ${constants.colors.backgroundBlueGradient};
        width: 100%;
        color: #fff;
        text-align: left;
      }

      .content {
        margin: 0;
        padding: 5px 0 15px;
      }

      .content > i > a {
        color: #fff;
      }

      .breadcrumb {
        padding-top: 25px;
      }
      .breadcrumb a {
        margin-top: 25px;
        color: #fff;
      }
      .breadcrumb:hover {
        text-decoration: underline;
      }

      h1 {
        margin: 10px 0 0;
        font-style: normal;
        font-weight: bold;
        color: #fff;
      }

      h1 span {
        font-weight: 400;
      }

      .tagline {
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 25px;
        margin: 15px 0 10px;
        color: #fff;
      }

      @media only screen and (min-width: 1px) and (max-width: 900px) {
        .content {
          padding: 0 0 10px;
        }
        .breadcrumb {
          padding-top: 10px;
        }
      }
    `}</style>
  </section>
);

export default PageHeader;
