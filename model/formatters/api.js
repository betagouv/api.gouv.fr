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
module.exports = {
  formatApi,
};
