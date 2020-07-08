// used by node, therefore in plain js
const frontmatter = require('front-matter');

const SIGNUP_URL =
  process.env.NEXT_PUBLIC_SIGNUP_URL || 'https://signup.api.gouv.fr';

/**
 * turns any link that match signup.api.gouv.fr/XYZ into $SIGNUP_URL/XYZ,
 * Used in staging
 */
const formatSignupLink = link => {
  if (link) {
    const pattern = /^https?:\/\/signup.api.gouv.fr(.*)/;
    const signup_url_parts = link.match(pattern) || [];
    if (signup_url_parts.length === 2) {
      return `${SIGNUP_URL}${signup_url_parts[1]}`;
    }
    return link;
  }
  return null;
};

const formatApi = (slug, data) => {
  const document = frontmatter(data);

  return {
    //@ts-ignore
    ...document.attributes,
    access_link: formatSignupLink(document.attributes.access_link),
    body: document.body,
    slug,
    description: document.attributes.tagline,
    path: `/les-api/${slug}`,
  };
};
module.exports = {
  formatApi,
};
