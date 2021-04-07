// used by node, therefore in plain js
const frontmatter = require('front-matter');

const formatApiWithOwner = producers => (slug, data) => {
  const document = frontmatter(data);

  //@ts-ignore
  const producer = producers.find(
    producer => producer.slug === document.attributes.producer
  );

  if (!producer.name) {
    throw new Error(
      `No matching producer for : ${document.attributes.producer} - in API : ${slug}`
    );
  }

  const partners = (document.attributes.partners || []).map(partner => {
    const partnerAsProducer = producers.find(
      producer => producer.slug === partner
    );
    if (partnerAsProducer) {
      return { name: partnerAsProducer.name, slug: partnerAsProducer.slug };
    }
    return { name: partner };
  });
  return {
    //@ts-ignore
    ...document.attributes,
    partners,
    body: document.body,
    slug,
    description: document.attributes.tagline,
    path: `/les-api/${slug}`,
    owner: producer.name,
    owner_acronym: producer.acronym || null,
    owner_slug: producer.slug,
    owner_type: producer.type || null,
    logo: producer.logo,
  };
};
module.exports = {
  formatApiWithOwner,
};
