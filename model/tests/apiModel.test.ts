import { uniq, flatten } from 'lodash';

import { readAllApisOnDisk } from '../readOnDiskForNode';
import { IApi } from '..';

let allApis: IApi[];

test('Can load all Apis', async () => {
  allApis = await readAllApisOnDisk();

  expect(allApis.length).toBeGreaterThan(0);
});

const compulsoryFields = ['title', 'tagline', 'owner', 'is_open', 'themes'];
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
