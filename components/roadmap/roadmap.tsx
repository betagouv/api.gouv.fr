import React from 'react';

import { RoadmapNode } from './index';

export enum RoadmapNodeType {
  ELLIPSIS,
  ADD_NEW_API,
  MONTH,
}

const roadmap = [
  {
    type: RoadmapNodeType.MONTH,
    what: 'Janvier',
  },
  {
    type: RoadmapNodeType.ADD_NEW_API,
    what: (
      <>
        API <a href="/les-apis/api_menj">MENJ</a>
      </>
    ),
  },
  {
    type: RoadmapNodeType.ELLIPSIS,
  },
  {
    type: RoadmapNodeType.MONTH,
    what: 'Avril',
  },
  {
    type: RoadmapNodeType.ADD_NEW_API,
    what: (
      <>
        API <a href="/les-apis/scanr">ScanR</a>
      </>
    ),
  },
  {
    type: RoadmapNodeType.ELLIPSIS,
  },
  {
    type: RoadmapNodeType.MONTH,
    what: 'Mai',
  },
  {
    type: RoadmapNodeType.ADD_NEW_API,
    what: (
      <>
        API{' '}
        <a href="/les-apis/api_catalogue_transport">
          Point d’Accès National aux données de transport
        </a>
      </>
    ),
  },
  {
    type: RoadmapNodeType.ELLIPSIS,
  },
  {
    type: RoadmapNodeType.MONTH,
    what: 'À venir',
  },
  {
    type: RoadmapNodeType.ADD_NEW_API,
    what: <>API jours fériés</>,
  },
  {
    type: RoadmapNodeType.ADD_NEW_API,
    what: <>API Ingres Noyau</>,
  },
  {
    type: RoadmapNodeType.ADD_NEW_API,
    what: <>API Nomenclatures</>,
  },
];

export default () => (
  <div id="roadmap-wrapper" className="text-wrapper">
    {roadmap.map((item, idx) => (
      <RoadmapNode key={idx} type={item.type} what={item.what} />
    ))}
  </div>
);
