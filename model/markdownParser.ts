import { IService, IApi } from '.';
import { formatServiceWithApis, formatApi } from './readOnDisk';

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

export { formatApi, formatServiceWithApis, loadApis, loadServices };
