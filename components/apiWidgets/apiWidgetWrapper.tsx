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
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
          padding: 20px 40px;
          border-radius: 5px;
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
      `}</style>
    </div>
  );
};

export default ApiWidgetWrapper;
