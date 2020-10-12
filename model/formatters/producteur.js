// used by node, therefore in plain js
const frontmatter = require('front-matter');

const formatProducteur = (slug, data) => {
  const document = frontmatter(data);

  return {
    //@ts-ignore
    ...document.attributes,
    body: document.body,
    path: `/producteurs/${slug}`,
    slug,
  };
};
module.exports = {
  formatProducteur,
};
