import React from 'react';

import { RoadmapNode } from './index';
import { IRoadmapElement } from '../../model';

export interface IProps {
  roadmap: IRoadmapElement[];
}

export default ({ roadmap }: IProps) => (
  <div id="roadmap-wrapper">
    {roadmap.map((item, idx) => (
      <RoadmapNode
        key={idx}
        type={item.type}
        what={item.what}
        path={item.path}
      />
    ))}
  </div>
);
