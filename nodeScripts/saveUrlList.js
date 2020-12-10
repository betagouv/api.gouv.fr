const {
  readAllApisOnDisk,
  readAllServicesOnDisk,
  readAllGuidesOnDisk,
  readAllProducersOnDisk,
} = require('../model/readOnDiskForNode');

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
  const producers = await readAllProducersOnDisk();
  const guides = await readAllGuidesOnDisk();

  const urlList = [
    '/',
    '/services',
    '/rechercher-api',
    '/contact',
    '/apropos',
    '/mentions-legales',
    '/feuille-de-route',
    '/documentation',
    '/equipe',
    '/vie-privee',
    ...apis.map(api => api.path),
    ...services.reduce((paths, service) => {
      if (!service.noindex) {
        paths.push(service.path);
      }
      return paths;
    }, []),
    ...producers.map(producer => producer.path),
    ...guides.reduce((paths, guide) => {
      if (!guide.noindex) {
        paths.push(guide.path);
      }
      return paths;
    }, []),
  ].map(url => `${process.env.SITE_URL || 'https://api.gouv.fr'}${url}`);
  writeUrlListOnDisk(urlList);
}

main();
