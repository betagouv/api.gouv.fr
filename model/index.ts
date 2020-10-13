import {
  getService,
  getAllServices,
  getAllAPIs,
  getAPI,
  getGuide,
  getAllGuides,
  getProducer,
  getAllProducers,
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

export interface IGuideElementShort {
  title: string;
  slug: string;
  image: string;
}

export interface IGuideElement extends IGuideElementShort {
  tags: string;
  tagline: string;
  body: string;
  api: string[];
  noindex: boolean;
  related_guides?: string[];
}

export interface IProducerElement {
  name: string;
  acronym: string;
  logo: string;
  slug: string;
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
  owner_slug: string;
  producer: string;
  last_update: Date;
  contact_link: string;
  external_site?: string;
  doc_tech_link: string;
  doc_tech_external: string;
  monitoring_link: string;
  monitoring_description: string;
  rate_limiting_description: string;
  rate_limiting_resume: string;
  partners: string[];
  themes: string[];
  keywords: string[];
  datagouv_uuid?: string[];
  content_intro?: string;
  access_page?: IAccessConditionWithVisitorType[]; // only for API with a detailed access page
  datapass_link?: string; // only for API using datapass
  account_link?: string; // only for API requiring an account
}

export {
  getService,
  getAllServices,
  getAllAPIs,
  getAPI,
  getGuide,
  getAllGuides,
  getRoadmap,
  getProducer,
  getAllProducers,
};
