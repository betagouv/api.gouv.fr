// used by node, therefore in plain js
const frontmatter = require('front-matter');

const formatQuestionTree = data => {
  const document = frontmatter(data);

  return {
    ...document.attributes,
  };
};
module.exports = {
  formatQuestionTree,
};
