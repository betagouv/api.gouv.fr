import React, { useState } from 'react';

import { RoadmapNode } from './index';
import { IRoadmapElement, RoadmapNodeType } from '../../model';
import Emoji from '../../uiComponents/emoji';

export interface IProps {
  roadmap: IRoadmapElement[];
}

const filter = (roadmap: IRoadmapElement[]) => {
  const filtered = [] as IRoadmapElement[];
  const today = new Date();
  const currentYear = today.getFullYear();
  let yearCursor = -1;

  roadmap.forEach(elem => {
    if (elem.type === RoadmapNodeType.YEAR) {
      //@ts-ignore
      yearCursor = elem.what;
    }
    if (yearCursor >= currentYear) {
      filtered.push(elem);
    }
  });
  return filtered;
};

const Roadmap = ({ roadmap }: IProps) => {
  const [displayAll, setDisplayAll] = useState(false);

  const r = displayAll ? roadmap : filter(roadmap);

  const onKeyDown = (keyEvent: React.KeyboardEvent<HTMLElement>) => {
    // toggle on Space or Enter
    if (keyEvent.keyCode === 13) {
      setDisplayAll(true);
    }
  };

  return (
    <div id="roadmap-wrapper">
      {!displayAll && (
        <div className="roadmap-node ellipsis">
          <div className="roadmap-show-all layout-center">
            <div
              onKeyDown={e => onKeyDown(e)}
              role="button"
              tabIndex={0}
              onClick={() => setDisplayAll(true)}
            >
              <Emoji label="passé" emoji="⌛️" />
              <i>Voir les événements des années précédentes </i>
              <Emoji label="passé" emoji="⌛️" />
            </div>
          </div>
        </div>
      )}
      {r.map((item, idx) => (
        <RoadmapNode
          key={idx}
          type={item.type}
          what={item.what}
          path={item.path}
        />
      ))}
    </div>
  );
};
export default Roadmap;
