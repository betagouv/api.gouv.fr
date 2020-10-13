import React, { PropsWithChildren } from 'react';

import constants from '../../constants';

interface IProps {
  title?: string;
}

const ApiWidgetWrapper: React.FC<PropsWithChildren<IProps>> = ({
  title,
  children,
}) => {
  return (
    <div className="widget-wrapper layout-center">
      {title && <div className="widget-label">{title}</div>}
      {children}
      <style global jsx>{`
        .widget-wrapper {
          background-color: ${constants.colors.lightGrey};
          flex-direction: column;
          padding: 50px;
          border-radius: 10px;
          position: relative;
          margin: 40px auto;
        }

        .widget-wrapper > .widget-label {
          position: absolute;
          margin: 0;
          top: -15px;
          font-weight: bold;
          background-color: #fff;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          padding: 3px 10px;
        }

        .widget-wrapper p {
          text-align: center;
        }

        .widget-wrapper .interactive-component {
          width: 70%;
          background-color: #fff;
          border: 1px solid ${constants.colors.darkBlue};
          box-shadow: 0 20px 35px 0px rgba(0, 0, 0, 0.25);
          padding: 40px 40px 30px;
          border-radius: 5px;
          position: relative;
        }
        .widget-wrapper .interactive-component:before {
          content: 'Démonstrateur';
          position: absolute;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
          padding: 4px 4px;
          font-size: 0.9rem;
          line-height: 0.9rem;
          background-color: ${constants.colors.darkBlue};
          top: 0;
          left: 20px;
          color: #fff;
        }
        .widget-wrapper .interactive-component > .results {
          margin-top: 20px;
          max-height: 300px;
          overflow: auto;
        }
        .widget-wrapper .interactive-component > .results > div {
          padding: 10px;
          background-color: #f3f3f3;
          border-radius: 4px;
          margin-bottom: 5px;
          font-size: 0.9rem;
          line-height: 1.3rem;
        }

        @media only screen and (min-width: 1px) and (max-width: 700px) {
          .widget-wrapper .interactive-component {
            width: calc(100% - 40px);
            padding: 40px 20px 30px;
          }
          .widget-wrapper {
            padding: 80px 20px 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default ApiWidgetWrapper;
