import { getService, getAllServices, getAllAPIs, getAPI } from './api';

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
  title: string;
  path: string;
  slug: string;
  logo: string;
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
  uptime: number;
  last_update: Date;
  contact_link: string;
  doc_tech_link: string;
  doc_tech_external: string;
  doc_tech_description: string;
  access_link: string;
  access_description: string;
  access_condition: string;
  monitoring_link: string;
  monitoring_description: string;
  rate_limiting_description: string;
  rate_limiting_resume: string;
  is_open: boolean;
  clients: string[];
  partners: string[];
}

export { getService, getAllServices, getAllAPIs, getAPI };
