import frontmatter from 'front-matter';

const formatApi = (slug, data) => {
  const document = frontmatter(data);

  return {
    ...document.attributes,
    body: document.body,
    slug,
    description: document.attributes.tagline,
    url: `/api-publiques/${slug}`,
  };
};

const formatService = (slug, data) => {
  const document = frontmatter(data);

  return {
    ...document.attributes,
    body: document.body,
    slug,
    url: `/service/${slug}`,
  };
};

const parseMarkdown = (context, formatter) => {
  const keys = context.keys();
  const values = keys.map(context);

  const data = keys.reduce((accumulator, key, index) => {
    // Create slug from filename
    const slug = key
      .replace(/^.*[\\\/]/, '')
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

const loadServices = async folder => {
  const serviceFolderContext = require.context('../_service', true, /\.md$/);
  return parseMarkdown(serviceFolderContext, formatService);
};

const loadApis = async folder => {
  const apiFolderContext = require.context('../_api', true, /\.md$/);
  return parseMarkdown(apiFolderContext, formatApi);
};

export { formatApi, formatService, loadApis, loadServices };
