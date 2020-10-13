import React from 'react';
import { RoadmapNodeType, IRoadmapElement } from '../../model';
import RichReactMarkdown from '../richReactMarkdown';

const RoadmapNode: React.FC<IRoadmapElement> = ({ type, what, path }) => {
  switch (type) {
    case RoadmapNodeType.ELLIPSIS:
      return <div className="roadmap-node ellipsis"></div>;
    case RoadmapNodeType.MONTH:
      return <div className="roadmap-node month">{what}</div>;
    case RoadmapNodeType.YEAR:
      return <div className="roadmap-node year">{what}</div>;
    case RoadmapNodeType.ADD_API:
      return (
        <div className="roadmap-node">
          <div className="date">
            Ajout au catalogue de l’
            {path ? <a href={path}>API {what}</a> : `API ${what}`}
          </div>
        </div>
      );
    case RoadmapNodeType.INFO:
      return (
        <div className="roadmap-node">
          <div className="date content">
            <div className="label info">Nouveauté</div>
            <RichReactMarkdown source={what as string} />
          </div>
        </div>
      );
    default:
      return (
        <div className="roadmap-node">
          <div className="date content">
            <div className="label">{type}</div>
            <RichReactMarkdown source={what as string} />
          </div>
        </div>
      );
  }
};

export default RoadmapNode;
