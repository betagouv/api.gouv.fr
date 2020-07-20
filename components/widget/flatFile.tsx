import React from 'react';
import { ButtonLink } from '../../uiComponents';
import constants from '../../constants';

interface IProps {
  href: string;
  title: string;
  description?: string;
}

const FlatFileWidget: React.FC<IProps> = ({ href, title, description }) => (
  <>
    <div className="flat-file-widget">
      <div>{title}</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="120" viewBox="0 0 504 504">
        <path d="M452.7 108.7l-.3-1-.1-.4-.5-1-.2-.4-1-1.2L348.2 2.3l-1.2-1c-.1 0-.2 0-.3-.2l-1-.5-.5-.1-1-.3-1.6-.2H74.8c-13 0-23.6 10.6-23.6 23.6v456.8c0 13 10.6 23.6 23.6 23.6h354.5c13 0 23.5-10.6 23.5-23.6V110.3l-.1-1.6zm-15.6 371.7c0 4.3-3.5 7.9-7.8 7.9H74.8a7.9 7.9 0 01-7.9-8V23.7c0-4.3 3.6-7.9 8-7.9h259.8V84c0 18.9 15.3 34.1 34.2 34.1H437v362.3z" />
        <path d="M405.6 165.4H98.4a7.9 7.9 0 00-7.8 7.8v236.3c0 4.3 3.5 7.9 7.8 7.9h307.2c4.3 0 7.8-3.6 7.8-7.9V173.2c0-4.3-3.5-7.8-7.8-7.8zM129.9 401.6h-23.6V378H130v23.6zm0-39.4h-23.6v-23.6H130v23.6zm0-39.3h-23.6v-23.7H130V323zm0-39.4h-23.6v-23.6H130v23.6zm0-39.4h-23.6v-23.6H130v23.6zm0-39.4h-23.6v-23.6H130v23.6zm102.4 197h-86.6V378h86.6v23.6zm0-39.5h-86.6v-23.6h86.6v23.6zm0-39.3h-86.6v-23.7h86.6V323zm0-39.4h-86.6v-23.6h86.6v23.6zm0-39.4h-86.6v-23.6h86.6v23.6zm0-39.3h-86.6V181h86.6v23.7zM315 401.6h-67V378h67v23.6zm0-39.4h-67v-23.6h67v23.6zm0-39.3h-67v-23.7h67V323zm0-39.4h-67v-23.6h67v23.6zm0-39.4h-67v-23.6h67v23.6zm0-39.3h-67V181h67v23.7zm82.7 196.8h-67V378h67v23.6zm0-39.4h-67v-23.6h67v23.6zm0-39.3h-67v-23.7h67V323zm0-39.4h-67v-23.6h67v23.6zm0-39.4h-67v-23.6h67v23.6zm0-39.3h-67V181h67v23.7z" />
      </svg>
      {description && <div>{description}</div>}
      <ButtonLink href={href}>Accèder au fichier</ButtonLink>
    </div>
    <style jsx>{`
      div.flat-file-widget {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 400px;
        border-radius: 10px;
        padding: 30px 20px;
        margin: auto;
        margin-top: 100px;
        width: 100%;
        background-color: ${constants.colors.lightGrey};
        position: relative;
      }

      svg {
        margin: 20px auto;
        fill: ${constants.colors.grey};
      }
    `}</style>
  </>
);

export default FlatFileWidget;
