// used by node, therefore in plain js
const { formatServiceWithApis } = require('./formatters/service');
const { formatGuide } = require('./formatters/guide');
const { formatApiWithOwner } = require('./formatters/api');
const { formatProducteur } = require('./formatters/producteur');
const fs = require('fs');

const readAllApisOnDisk = async () => {
  const files = fs.readdirSync('./_data/api', 'utf8');
  const allProducers = await readAllProducersOnDisk();
  const formatter = formatApiWithOwner(allProducers);

  return files.map(fileName => {
    const file = fs.readFileSync(`./_data/api/${fileName}`, 'utf8');

    // Parse yaml metadata & markdownbody in document
    return formatter(fileName.replace('.md', ''), file);
  }, {});
};

const readAllServicesOnDisk = async () => {
  const files = fs.readdirSync('./_data/service', 'utf8');
  const allApis = await readAllApisOnDisk();
  const formatter = formatServiceWithApis(allApis);

  return files.map(fileName => {
    const file = fs.readFileSync(`./_data/service/${fileName}`, 'utf8');

    // Parse yaml metadata & markdownbody in document
    return formatter(fileName.replace('.md', ''), file);
  }, {});
};

const readAllGuidesOnDisk = async () => {
  const files = fs.readdirSync('./_data/guides', 'utf8');

  return files.map(fileName => {
    const file = fs.readFileSync(`./_data/guides/${fileName}`, 'utf8');

    // Parse yaml metadata & markdownbody in document
    return formatGuide(fileName.replace('.md', ''), file);
  }, {});
};

const readAllProducersOnDisk = async () => {
  const files = fs.readdirSync('./_data/producteurs', 'utf8');

  return files.map(fileName => {
    const file = fs.readFileSync(`./_data/producteurs/${fileName}`, 'utf8');

    // Parse yaml metadata & markdownbody in document
    return formatProducteur(fileName.replace('.md', ''), file);
  }, {});
};

module.exports = {
  readAllApisOnDisk,
  readAllServicesOnDisk,
  readAllGuidesOnDisk,
  readAllProducersOnDisk,
};
