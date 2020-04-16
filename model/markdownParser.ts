import frontmatter from 'front-matter';
import { IService, IApi } from '.';

const formatApi = (slug, data): IApi => {
  const document = frontmatter(data);

  return {
    //@ts-ignore
    ...document.attributes,
    body: document.body,
    slug,
    description: document.attributes.tagline,
    path: `/api-publiques/${slug}`,
  };
};

const formatServiceWithApis = apis => (slug, data): IService => {
  const document = frontmatter(data);

  //@ts-ignore
  const matchingAPis = document.attributes.api.map(serviceApiTitle => {
    const match = apis.find(api => api.title === serviceApiTitle);
    if (!match) {
      throw new Error(
        `No matching API for : ${serviceApiTitle} - in service : ${slug}`
      );
    }
    return { title: match.title, path: match.path };
  });

  return {
    //@ts-ignore
    ...document.attributes,
    body: document.body,
    slug,
    path: `/service/${slug}`,
    apiList: matchingAPis,
  };
};

const parseMarkdown = (context, formatter) => {
  const keys = context.keys();
  const values = keys.map(context);

  const data = keys.reduce((accumulator, key, index) => {
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
  }, {});
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

export { formatApi, formatServiceWithApis, loadApis, loadServices };
