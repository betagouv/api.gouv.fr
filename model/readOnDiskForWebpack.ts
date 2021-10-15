import {
  IService,
  IApi,
  IRoadmap,
  IRoadmapElement,
  IGuideElement,
  IProducerElement,
} from '.';
import {
  formatServiceWithApis,
  formatApiWithOwner,
  formatRoadmap,
  formatGuide,
  formatProducteur,
} from './formatters';
import frontmatter from 'front-matter';

interface IStore {
  apis: { [key: string]: IApi };
  services: { [key: string]: IService };
  producers: { [key: string]: IProducerElement };
  guides: { [key: string]: IGuideElement };
  roadmap: IRoadmapElement[];
}

const store = {
  apis: {},
  services: {},
  producers: {},
  guides: {},
  roadmap: [],
} as IStore;

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
      const isMarkdownExtension = key.indexOf('.md') > -1;
      if (!isMarkdownExtension) {
        throw new Error(`${key} file does not use a markdown extension (.md)`);
      }

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
  if (Object.keys(store.services).length === 0) {
    //@ts-ignore
    const serviceFolderContext = require.context(
      '../_data/service',
      true,
      /\.md$/
    );
    const apis = await loadApis();
    const formatter = formatServiceWithApis(Object.values(apis));

    store.services = parseMarkdown(serviceFolderContext, formatter);
  }
  return store.services;
};

const loadApis = async (): Promise<{ [key: string]: IApi }> => {
  if (Object.keys(store.apis).length === 0) {
    //@ts-ignore
    const apiFolderContext = require.context('../_data/api', true, /\.md$/);

    const producers = await getAllProducers();
    const formatter = formatApiWithOwner(Object.values(producers));

    store.apis = await parseMarkdown(apiFolderContext, formatter);
  }
  return store.apis;
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

export const getAllGuides = async (): Promise<IGuideElement[]> => {
  const data = await loadGuides();
  return Object.values(data);
};

export const getAllProducers = async (): Promise<IProducerElement[]> => {
  const data = await loadProducers();
  return Object.values(data);
};

export const getRoadmap = async (): Promise<IRoadmapElement[]> => {
  if (store.roadmap.length === 0) {
    const roadmapFile = require('../_data/roadmap.md');
    const md = frontmatter(roadmapFile.default);
    store.roadmap = formatRoadmap(md.attributes as IRoadmap);
  }
  return store.roadmap;
};

export const getGuide = async (slug: string): Promise<IGuideElement> => {
  const guides = await loadGuides();
  return guides[slug];
};

export const loadGuides = async (): Promise<{
  [key: string]: IGuideElement;
}> => {
  if (Object.keys(store.guides).length === 0) {
    //@ts-ignore
    const guideFolderContext = require.context(
      '../_data/guides',
      true,
      /\.md$/
    );
    store.guides = parseMarkdown(guideFolderContext, formatGuide);
  }
  return store.guides;
};

export const getProducer = async (slug: string): Promise<IProducerElement> => {
  const producers = await loadProducers();
  return producers[slug];
};

export const loadProducers = async (): Promise<{
  [key: string]: IProducerElement;
}> => {
  if (Object.keys(store.producers).length === 0) {
    //@ts-ignore
    const folderContext = require.context(
      '../_data/producteurs',
      true,
      /\.md$/
    );
    store.producers = parseMarkdown(folderContext, formatProducteur);
  }
  return store.producers;
};
