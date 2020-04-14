import frontmatter from 'front-matter';

const formatApi = (slug, data) => {
  const document = frontmatter(data);

  return {
    ...document.attributes,
    body: document.body,
    slug,
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

const loadServices = async folder => {
  const apis = (context => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');
      const value = values[index];

      // Parse yaml metadata & markdownbody in document
      return formatService(slug, value.default);
    });
    return data;
  })(require.context('../_service', true, /\.md$/));

  return apis;
};

const loadApis = async folder => {
  const apis = (context => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');
      const value = values[index];

      // Parse yaml metadata & markdownbody in document
      return formatApi(slug, value.default);
    });
    return data;
  })(require.context('../_api', true, /\.md$/));

  return apis;
};

export { formatApi, formatService, loadApis, loadServices };
