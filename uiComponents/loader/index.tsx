import React from 'react';
import constants from '../../constants';

const Loader: React.FC<{}> = () => (
  <>
    <div className="loader-container layout-center">
      <div className="loader">
        <span></span>
        <span></span>
      </div>
    </div>
    <style jsx>{`
      .loader-container {
        width: 100%;
      }
      .loader {
        margin: auto;
        width: 50px;
        height: 50px;
        display: inline-block;
        padding: 0px;
        text-align: left;
      }
      .loader span {
        position: absolute;
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background: ${constants.colors.vividBlue};
        -webkit-animation: loader 0.8s linear infinite;
        animation: loader 0.8s linear infinite;
      }
      .loader span:last-child {
        animation-delay: -0.4s;
        -webkit-animation-delay: -0.4s;
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

export default Loader;
