const {
  readAllApisOnDisk,
  readAllServicesOnDisk,
} = require('../model/readOnDisk');

/**
 * Save the list of url in a text file. For testing purposes and for sitemap generation
 * @param {*} urlList
 */

function writeUrlListOnDisk(urlList) {
  const fs = require('fs');
  var file = fs.createWriteStream('public/url-list.txt');
  file.on('error', function(err) {
    return console.log(err);
  });
  urlList.forEach(function(url) {
    file.write(url + '\n');
  });
  file.end();
  console.log(`*** ${urlList.length} url saved ***`);
}

async function main() {
  const apis = await readAllApisOnDisk();
  const services = await readAllServicesOnDisk();

  const urlList = [
    '/',
    '/services',
    '/rechercher-api',
    '/contact',
    '/about',
    '/mentions-legales',
    '/vie-privee',
    ...apis.map(api => api.path),
    ...services.map(service => service.path),
  ].map(url => `${process.env.SITE_URL || 'https://api.gouv.fr'}${url}`);
  writeUrlListOnDisk(urlList);
}

main();
