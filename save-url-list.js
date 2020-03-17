require('dotenv').config();
const { buildDataset } = require('./build-dataset');

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
  const { apis, services } = await buildDataset();

  const urlList = [
    '/',
    '/services',
    '/rechercher-api',
    '/contact',
    '/about',
    '/mention-legales',
    '/vie-privee',
    ...apis.map(api => `/api/${api.slug}`),
    ...services.map(service => `/service/${service.slug}`),
  ].map(url => `${process.env.SITE_URL}${url}`);
  writeUrlListOnDisk(urlList);
}

main();
