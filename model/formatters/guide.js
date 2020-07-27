// used by node, therefore in plain js
const frontmatter = require('front-matter');

const formatGuide = (slug, data) => {
  const document = frontmatter(data);

  return {
    //@ts-ignore
    ...document.attributes,
    body: document.body,
    slug,
  };
};
module.exports = {
  formatGuide,
};
