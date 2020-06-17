import React from 'react';
import { RoadmapNodeType, IRoadmapElement } from '../../model';

const RoadmapNode: React.FC<IRoadmapElement> = ({ type, what, path }) => {
  switch (type) {
    case RoadmapNodeType.ELLIPSIS:
      return <div className="roadmap-node ellipsis"></div>;
    case RoadmapNodeType.MONTH:
      return <div className="roadmap-node month">{what}</div>;
    case RoadmapNodeType.ADD_API:
      return (
        <div className="roadmap-node">
          <div className="date">
            Ajout de l’{path ? <a href={path}>API {what}</a> : `API ${what}`}
          </div>
        </div>
      );
    default:
      return (
        <div className="roadmap-node">
          <div className="date">
            <div className="label">{type} :</div>
            <div dangerouslySetInnerHTML={{ __html: what as string }} />
          </div>
        </div>
      );
  }
};

export default RoadmapNode;
