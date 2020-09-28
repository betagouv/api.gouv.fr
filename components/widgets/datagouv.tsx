import React from 'react';
import constants from '../../constants';
import { ButtonLink } from '../../uiComponents';
import external from '../../uiComponents/icon/external';
import flatFile from '../../uiComponents/icon/flatFile';

interface IProps {
  href: string;
  title: string;
  productor?: string;
}

const DatagouvWidget: React.FC<IProps> = ({ href, title, productor }) => (
  <>
    <div className="flat-file-widget">
      <div className="top-container">
        <div className="logo-container">{flatFile}</div>
        <div>
          <div className="flat-file-title">{title}</div>
          {productor && (
            <div className="description">Produit par : {productor}</div>
          )}
        </div>
      </div>
      <div className="cta layout-center">
        <ButtonLink
          href={href}
          target="_blank"
          size="small"
          rel="noopener noreferrer"
          alt
        >
          Accéder au jeu de données&nbsp;
          {external}
        </ButtonLink>
      </div>
    </div>
    <style jsx>{`
      div.flat-file-widget {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        border-radius: 3px;
        padding: 10px 20px;
        color: #444;
        margin: auto;
        width: calc(100% - 40px);
        max-width: 310px;
        border: 1px solid ${constants.colors.greyBlue};
        height: calc(100% - 20px);
        transition: none;
      }
      div.top-container {
        display: flex;
        align-items: flex-start;
        text-align: left;
        font-weight: bold;
        flex-grow: 1;
      }
      div.logo-container {
        flex-shrink: 0;
        width: 60px;
      }
      div.logo-container > img {
        width: 100%;
      }
      div.description {
        font-size: 0.9rem;
        line-height: 1.3rem;
        font-style: italic;
        font-weight: normal;
        margin-bottom: 10px;
      }
      div.cta {
        margin: 10px auto;
      }
    `}</style>
  </>
);

export default DatagouvWidget;
