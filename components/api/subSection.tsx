import React, { PropsWithChildren } from 'react';

interface IProps {
  title: string;
}

const SubSection: React.FC<PropsWithChildren<IProps>> = ({
  title,
  children,
}) => {
  return (
    <>
      <div className="sub-section">
        <h2>{title}</h2>
        {children}
      </div>

      <style jsx>{`
        div {
          margin: 40px 0;
          position: relative;
        }

        h2 {
          font-size: 1.2rem;
          line-height: 1.8rem;
          margin-bottom: 5px;
        }
      `}</style>
    </>
  );
};

export default SubSection;
