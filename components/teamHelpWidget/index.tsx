import React from 'react';
import { ButtonLink } from '../../uiComponents';
import constants from '../../constants';

interface IProps {
  title?: string;
  btnLabel?: string;
  source?: string;
}

const TeamHelpWidget: React.FC<IProps> = ({
  title = 'Besoin d’assistance pour construire un service numérique ?',
  btnLabel = 'On vous vient en aide',
  source = 'team-widget',
}) => (
  <>
    <div className="team-help-widget">
      <div>
        <img alt="" src="/images/equipe/Etienne.jpg" />
        <img alt="" src="/images/equipe/Xavier.jpg" />
        <img alt="" src="/images/equipe/Raph.jpg" />
      </div>
      <p>{title}</p>
      <ButtonLink href={`/parcours-client?source=${source}`} alt>
        {btnLabel}
      </ButtonLink>
    </div>
    <style jsx>{`
      div.team-help-widget {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 400px;
        border-radius: 10px;
        padding: 30px 20px;
        margin: auto;
        margin-top: 100px;
        color: #fff;
        background-color: ${constants.colors.blue};
        position: relative;
      }

      div.team-help-widget > div {
        position: absolute;
        top: -10px;
      }

      p {
        text-align: center;
      }

      img {
        width: 70px;
        height: 70px;
        border-radius: 100px;
        border: 5px solid #fff;
        margin-right: -20px;
        margin-top: -35px;
      }
    `}</style>
  </>
);

export default TeamHelpWidget;
