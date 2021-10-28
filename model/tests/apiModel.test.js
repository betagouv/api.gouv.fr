const { uniq, flatten } = require('lodash');
const { readAllApisOnDisk } = require('../readOnDiskForNode');

let allApis;

test('Can load all Apis', async () => {
  allApis = await readAllApisOnDisk();

  expect(allApis.length).toBeGreaterThan(0);
});

const compulsoryFields = [
  'title',
  'tagline',
  'producer',
  'is_open',
  'themes',
  'last_update',
];
compulsoryFields.forEach(fieldName => {
  test(`Every API has a ${fieldName} field`, async () => {
    let hasField = true;

    allApis.forEach(api => {
      //@ts-ignore
      if (api[fieldName] === undefined) {
        console.log(`API ${api.slug} has no ${fieldName}`);
        hasField = false;
      }
    });
    expect(hasField).toBe(true);
  });
});

test(`No theme is null or undefined`, async () => {
  let notUndef = true;

  const allThemes = uniq(flatten(allApis.map(api => api.themes))).sort();

  allThemes.forEach(theme => {
    if (theme === undefined) {
      notUndef = false;
    }
  });
  expect(notUndef).toBe(true);
});

test(`Field is_open is -1, 0 or 1`, async () => {
  let ok = true;

  allApis.forEach(api => {
    //@ts-ignore
    if ([-1, 0, 1].indexOf(api.is_open) === -1) {
      console.log(
        `API ${api.slug} has incorrect value for is_open : ${api.is_open}`
      );
      ok = false;
    }
  });
  expect(ok).toBe(true);
});

test('Every closed API has an access page', async () => {
  let ok = true;

  allApis.forEach(api => {
    //@ts-ignore
    if (api.is_open === -1 && !api.access_page) {
      console.log(`API ${api.slug} has no access_page and is not open`);
      ok = false;
    }
  });
  expect(ok).toBe(true);
});

test('Every API requiring an account has an account link', async () => {
  let ok = true;

  allApis.forEach(api => {
    //@ts-ignore
    if (api.is_open === 0 && !api.account_link) {
      console.log(
        `API ${api.slug} has no account_link and yet is requiring an  account`
      );
      ok = false;
    }
  });
  expect(ok).toBe(true);
});

test('Every API description contains no h1 / h2 titles ', async () => {
  let ok = true;

  allApis.forEach(api => {
    //@ts-ignore
    if (api.body.indexOf('\r\n## ') > -1 || api.body.indexOf('\r\n# ') > -1) {
      console.log(`API ${api.slug} has an h1 or a h2 in description`);
      ok = false;
    }

    const intro = api.content_intro || '';
    if (intro.indexOf('\r\n## ') > -1 || intro.indexOf('\r\n# ') > -1) {
      console.log(`API ${api.slug} has an h1 or a h2 in intro`);
      ok = false;
    }
  });
  expect(ok).toBe(true);
});
