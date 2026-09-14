const { formatApiWithOwner } = require('../formatters/api');

const allProducers = [
  {
    slug: 'dinum',
    name: 'Direction interministérielle du numérique',
    acronym: 'DINUM',
  },
];

const apiFile = producerSlug => `---
title: Ma Super API
tagline: Mission de l'API
producer: ${producerSlug}
---

### Description de l'API
`;

test('An API pointing to an unknown producer throws an explicit error', () => {
  const formatter = formatApiWithOwner(allProducers);

  expect(() =>
    formatter('ma-super-api', apiFile('producteur-inconnu'))
  ).toThrow(
    'No matching producer for : producteur-inconnu - in API : ma-super-api'
  );
});

test('An API pointing to a known producer is formatted', () => {
  const formatter = formatApiWithOwner(allProducers);
  const api = formatter('ma-super-api', apiFile('dinum'));

  expect(api.owner).toBe('Direction interministérielle du numérique');
  expect(api.owner_slug).toBe('dinum');
});
