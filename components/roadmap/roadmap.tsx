import React from 'react';

import { RoadmapNode, RoadmapNodeType } from './index';

const roadmap = [
  { type: RoadmapNodeType.ELLIPSIS },
  {
    type: RoadmapNodeType.DATE,
    what: <>API Hub'eau Piézométrie</>,
    when: 'Janvier 2020',
  },
];

export default () => (
  <div className="text-wrapper">
    {roadmap.map(item => (
      <RoadmapNode type={item.type} what={item.what} when={item.when} />
    ))}
  </div>
);
