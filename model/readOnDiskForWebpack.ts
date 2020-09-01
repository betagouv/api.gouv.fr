import { IService, IApi, IRoadmap, IRoadmapElement, IGuideElement } from '.';
import {
  formatServiceWithApis,
  formatApi,
  formatRoadmap,
  formatGuide,
} from './formatters';
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
  const serviceFolderContext = require.context(
    '../_data/service',
    true,
    /\.md$/
  );
  const apis = await loadApis();
  const formatter = formatServiceWithApis(Object.values(apis));

  const services = parseMarkdown(serviceFolderContext, formatter);
  return services;
};

const loadApis = async (): Promise<{ [key: string]: IApi }> => {
  //@ts-ignore
  const apiFolderContext = require.context('../_data/api', true, /\.md$/);
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

export const getRoadmap = async (): Promise<IRoadmapElement[]> => {
  const roadmapFile = require('../_data/roadmap.md');
  const md = frontmatter(roadmapFile.default);
  return formatRoadmap(md.attributes as IRoadmap);
};

export const getGuide = async (slug: string): Promise<IGuideElement> => {
  const file = require(`../_data/guide/${slug}.md`);
  return formatGuide(slug, file.default);
};

export const getAllGuides = async (): Promise<IGuideElement[]> => {
  //@ts-ignore
  const guideFolderContext = require.context('../_data/guide', true, /\.md$/);
  return Object.values(parseMarkdown(guideFolderContext, formatGuide));
};
