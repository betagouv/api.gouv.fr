import { IRoadmap, IRoadmapElement, RoadmapNodeType } from '..';

const monthAsWords = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
];

const monthNode = (month: any): IRoadmapElement => {
  return {
    type: RoadmapNodeType.MONTH,
    what: month,
  };
};
const yearNode = (year: any): IRoadmapElement => {
  return {
    type: RoadmapNodeType.YEAR,
    what: year,
  };
};
const ellispsisNode = (): IRoadmapElement => {
  return {
    type: RoadmapNodeType.ELLIPSIS,
  };
};

export const formatRoadmap = (roadmap: IRoadmap) => {
  const flatRoadmap: IRoadmapElement[] = [];
  Object.keys(roadmap).forEach((year: string) => {
    let lastMonth = 0;

    flatRoadmap.push(yearNode(year));

    Object.keys(roadmap[year]).forEach((month: string) => {
      const monthAsNumber = parseInt(month, 10);
      if (monthAsNumber - lastMonth > 1) {
        // add an ellipse between non consecutive month
        flatRoadmap.push(ellispsisNode());
      }
      lastMonth = monthAsNumber;

      flatRoadmap.push(monthNode(monthAsWords[monthAsNumber - 1]));

      roadmap[year][month].forEach((roadmapEvent: IRoadmapElement) => {
        flatRoadmap.push(roadmapEvent);
      });
    });
  });

  return flatRoadmap as IRoadmapElement[];
};
