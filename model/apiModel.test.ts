import fs from 'fs';
import { uniq, flatten } from 'lodash';

import { formatApi } from './markdownParser';
import { IApi } from '.';

export const getAllApisWithFs = async () => {
  const files = fs.readdirSync('./_api', 'utf8');
  return files.map(fileName => {
    const file = fs.readFileSync(`./_api/${fileName}`, 'utf8');

    // Parse yaml metadata & markdownbody in document
    return formatApi(fileName, file);
  }, {});
};

let allApis: IApi[];

test('Can load all Apis', async () => {
  allApis = await getAllApisWithFs();

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

test('Every API has a theme', async () => {});
