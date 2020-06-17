import { IService, IApi, IRoadmap, IRoadmapElement, RoadmapNodeType } from '.';
import { formatServiceWithApis, formatApi } from './formatter';
import frontmatter from 'front-matter';

const parseMarkdown = (
  context: any,
  formatter: (slug: string, data: any) => IApi | IService
) => {
  const keys = context.keys();
  const values = keys.map(context);

  const data = keys.reduce(
    (
      accumulator: { [key: string]: IApi | IService },
      key: string,
      index: number
    ) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');
      const value = values[index];

      // Parse yaml metadata & markdownbody in document
      accumulator[slug] = formatter(slug, value.default);
      return accumulator;
    },
    {}
  );
  return data;
};

const loadServices = async (): Promise<{ [key: string]: IService }> => {
  //@ts-ignore
  const serviceFolderContext = require.context('../_service', true, /\.md$/);
  const apis = await loadApis();
  const formatter = formatServiceWithApis(Object.values(apis));

  const services = parseMarkdown(serviceFolderContext, formatter);
  return services;
};

const loadApis = async (): Promise<{ [key: string]: IApi }> => {
  //@ts-ignore
  const apiFolderContext = require.context('../_api', true, /\.md$/);
  return parseMarkdown(apiFolderContext, formatApi);
};

export const getAPI = async (id: string): Promise<IApi> => {
  const data = await loadApis();
  return data[id];
};

export const getService = async (id: string): Promise<IService> => {
  const data = await loadServices();
  return data[id];
};

export const getAllAPIs = async (): Promise<IApi[]> => {
  const data = await loadApis();
  return Object.values(data);
};

export const getAllServices = async (): Promise<IService[]> => {
  const data = await loadServices();
  return Object.values(data);
};

const monthLabels = [
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

const flatten = (roadmap: IRoadmap) => {
  const flatRoadmap: IRoadmapElement[] = [];
  Object.keys(roadmap).forEach((year: any) => {
    let lastMonth = 0;
    Object.keys(roadmap[year]).forEach((month: any) => {
      const monthAsNumber = parseInt(month, 10);
      if (monthAsNumber - lastMonth > 1) {
        lastMonth = monthAsNumber;
        flatRoadmap.push({ type: RoadmapNodeType.ELLIPSIS });
      } else if (year === 'Next') {
        flatRoadmap.push({ type: RoadmapNodeType.ELLIPSIS });
        flatRoadmap.push({ type: RoadmapNodeType.MONTH, what: 'À venir' });
        roadmap['Next']['Soon'].forEach((roadmapEvent: IRoadmapElement) => {
          flatRoadmap.push(roadmapEvent);
        });
      }
      if (isNaN(monthAsNumber)) {
        flatRoadmap.push({ type: RoadmapNodeType.MONTH, what: month });
      } else {
        flatRoadmap.push({
          type: RoadmapNodeType.MONTH,
          what: monthLabels[month - 1],
        });
      }
      roadmap[year][month].forEach((roadmapEvent: IRoadmapElement) => {
        flatRoadmap.push(roadmapEvent);
      });
    });
  });

  return flatRoadmap;
};

export const getRoadmap = async (): Promise<IRoadmapElement[]> => {
  const roadmapFile = require('../_data/roadmap.md');
  const md = frontmatter(roadmapFile.default);
  return flatten(md.attributes as IRoadmap);
};
