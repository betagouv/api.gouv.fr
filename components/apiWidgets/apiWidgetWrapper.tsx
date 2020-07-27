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
          min-width: 60%;
          background-color: #fff;
          box-shadow: 0 20px 35px 0px rgba(0, 0, 0, 0.25);
          padding: 20px 40px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default ApiWidgetWrapper;
