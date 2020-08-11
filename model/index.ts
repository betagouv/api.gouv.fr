import {
  getService,
  getAllServices,
  getAllAPIs,
  getAPI,
  getGuide,
  getAllGuides,
  getRoadmap,
} from './readOnDiskForWebpack';

export enum RoadmapNodeType {
  YEAR,
  MONTH,
  ELLIPSIS,
  ADD_API = 'ADD_API',
  DLNUF = 'DLNUF',
  INFO = 'INFO',
}

export interface IRoadmapElement {
  type: RoadmapNodeType;
  what?: string | number;
  path?: string;
}

export interface IRoadmap {
  [year: string]: {
    [month: string]: IRoadmapElement[];
  };
}

export interface IGuideElement {
  title: string;
  tags: string;
  tagline: string;
  body: string;
  slug: string;
  noindex: boolean;
}

export interface IService {
  slug: string;
  path: string;
  title: string;
  description: string;
  link: string;
  api: string[];
  apiList: IApiShort[];
  body: string;
  screenshot: string;
}

export interface IApiShort {
  slug: string;
  logo: string;
  uptime: number;
  title: string;
  path: string;
  tagline: string;
  is_open: IIsApiOpen;
  owner: string;
}

export enum ELIGIBLE {
  YES = 1,
  NO = -1,
  MAYBE = 0,
}

export enum IIsApiOpen {
  YES = 1,
  NO = -1,
  MAYBE = 0,
}

export interface IAccessCondition {
  description: string;
  is_eligible: ELIGIBLE;
}

export interface IAccessConditionWithVisitorType extends IAccessCondition {
  who: string[];
}

export interface IApi extends IApiShort {
  path: string;
  body: string;
  visits_2019: number;
  title: string;
  tagline: string;
  logo: string;
  stat: number;
  owner: string;
  owner_acronym: string;
  last_update: Date;
  contact_link: string;
  external_site?: string;
  doc_tech_link: string;
  doc_tech_external: string;
  access_link: string;
  access_description: string;
  access_condition: string;
  access_page: IAccessConditionWithVisitorType[];
  monitoring_link: string;
  monitoring_description: string;
  rate_limiting_description: string;
  rate_limiting_resume: string;
  clients: string[];
  partners: string[];
  themes: string[];
  keywords: string[];
}

export {
  getService,
  getAllServices,
  getAllAPIs,
  getAPI,
  getGuide,
  getAllGuides,
  getRoadmap,
};
