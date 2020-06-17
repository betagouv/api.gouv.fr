// used by node, therefore in plain js
const frontmatter = require('front-matter');

const formatApi = (slug, data) => {
  const document = frontmatter(data);

  return {
    //@ts-ignore
    ...document.attributes,
    body: document.body,
    slug,
    description: document.attributes.tagline,
    path: `/les-api/${slug}`,
  };
};

const formatServiceWithApis = apis => (slug, data) => {
  const document = frontmatter(data);

  //@ts-ignore
  const matchingAPis = document.attributes.api.map(serviceApiTitle => {
    const match = apis.find(api => api.title === serviceApiTitle);
    if (!match) {
      throw new Error(
        `No matching API for : ${serviceApiTitle} - in service : ${slug}`
      );
    }

    return {
      slug: match.slug,
      title: match.title,
      path: match.path,
      tagline: match.tagline,
      uptime: match.uptime || null, // for serialization
      owner: match.owner,
      is_open: match.is_open,
      logo: match.logo || null, // for serialization
    };
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

module.exports = {
  formatApi,
  formatServiceWithApis,
};
