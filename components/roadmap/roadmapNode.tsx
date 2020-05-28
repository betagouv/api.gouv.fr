import React from 'react';
import { RoadmapNodeType } from './index';

interface IProps {
  type: RoadmapNodeType;
  what?: JSX.Element | string;
}

const RoadmapNode: React.FC<IProps> = ({ type, what }) => {
  switch (type) {
    case RoadmapNodeType.ELLIPSIS:
      return <div className="roadmap-node ellipsis"></div>;
    case RoadmapNodeType.MONTH:
      return <div className="roadmap-node month">{what}</div>;
    default:
      return (
        <>
          <div className="roadmap-node">
            <div className="date">Ajout {what}</div>
          </div>
        </>
      );
  }
};

export default RoadmapNode;
