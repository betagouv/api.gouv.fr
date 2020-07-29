import React, { PropsWithChildren } from 'react';
import constants from '../../constants';

interface IProps {
  title: string;
  id?: string;
}

const SubSection: React.FC<PropsWithChildren<IProps>> = ({
  id = '',
  title,
  children,
}) => {
  return (
    <>
      <div id={id} className="sub-section">
        <h2>{title}</h2>
        {children}
      </div>

      <style jsx>{`
        div.sub-section {
          margin: 40px 0;
          position: relative;
        }

        h2 {
          font-size: 1.2rem;
          line-height: 1.8rem;
          margin-bottom: 5px;
        }
        @media only screen and (min-width: 1px) and (max-width: 900px) {
          div.sub-section {
            border: 2px solid ${constants.colors.lightBlue};
            border-radius: 4px;
            margin: 10px 0;
            padding: 10px;
          }

          h2 {
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
};

export default SubSection;
