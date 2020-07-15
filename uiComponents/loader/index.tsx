import React from 'react';
import constants from '../../constants';

interface IProps {
  small?: boolean;
  message?: string;
}

const Loader: React.FC<IProps> = ({ small = false, message = '' }) => {
  const size = small ? 20 : 50;
  return (
    <>
      <div className="loader-container layout-center">
        {!!message && <div className="message">{message}</div>}
        <div className="loader">
          <span></span>
          <span></span>
        </div>
      </div>
      <style jsx>{`
        .loader-container {
          width: 100%;
          flex-direction: column;
        }
        .loader {
          margin: auto;
          width: ${size}px;
          height: ${size}px;
          display: inline-block;
          padding: 0px;
          text-align: left;
        }
        .loader span {
          position: absolute;
          display: inline-block;
          width: ${size}px;
          height: ${size}px;
          border-radius: 100%;
          background: ${constants.colors.vividBlue};
          -webkit-animation: loader 0.8s linear infinite;
          animation: loader 0.8s linear infinite;
        }
        .loader span:last-child {
          animation-delay: -0.4s;
          -webkit-animation-delay: -0.4s;
        }

        .loader-container > .message {
          font-style: italic;
          margin: 20px auto;
        }
        @keyframes loader {
          0% {
            transform: scale(0, 0);
            opacity: 0.8;
          }
          100% {
            transform: scale(1, 1);
            opacity: 0;
          }
        }
        @-webkit-keyframes loader {
          0% {
            -webkit-transform: scale(0, 0);
            opacity: 0.8;
          }
          100% {
            -webkit-transform: scale(1, 1);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Loader;
