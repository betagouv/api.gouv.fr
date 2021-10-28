const { uniq, flatten } = require('lodash');
const { readAllServicesOnDisk } = require('../readOnDiskForNode');

let allServices;

test('Can load all Apis', async () => {
  allServices = await readAllServicesOnDisk();

  expect(allServices.length).toBeGreaterThan(0);
});

const compulsoryFields = ['title', 'link', 'description', 'api', 'screenshot'];
compulsoryFields.forEach(fieldName => {
  test(`Every API has a ${fieldName} field`, async () => {
    let hasField = true;

    allServices.forEach(service => {
      //@ts-ignore
      if (service[fieldName] === undefined) {
        console.log(`API ${service.slug} has no ${fieldName}`);
        hasField = false;
      }
    });
    expect(hasField).toBe(true);
  });
});

test(`No api is null or undefined`, async () => {
  let notUndef = true;

  const allThemes = uniq(
    flatten(allServices.map(service => service.apiList.map(api => api.title)))
  ).sort();

  allThemes.forEach(theme => {
    if (theme === undefined) {
      notUndef = false;
    }
  });
  expect(notUndef).toBe(true);
});

test('Every API has a theme', async () => {});
