const { readFile, readdir } = require("fs").promises;
const { join } = require("path");
const frontmatter = require("front-matter");

const API_DIR = join(__dirname, "_api");
const SERVICE_DIR = join(__dirname, "_service");
const DEFAULT_LOGO = "img/logo-generique-startup-carre.jpg";

function apiToAPIV1(api) {
  return {
    title: api.title,
    url: api.url,
    description: api.tagline,
    image: api.logo || DEFAULT_LOGO,
    domain: api.domain,
    owner: api.owner,
    contract: api.contract,
    keywords: api.keywords,
    clients: api.clients,
    partners: api.partners
  };
}

function expandAPIsWithServices(apis, services) {
  services.forEach(service => {
    if (service.api && service.api.length > 0) {
      service.api.forEach(apiTitle => {
        const api = apis.find(api => api.title === apiTitle);
        if (!api.services) {
          api.services = [];
        }
        api.services.push(service.title);
      });
    }
  });
}

async function readMarkdownDir(dir) {
  const files = await readdir(dir);

  return Promise.all(
    files.map(async fileName => {
      const filePath = join(dir, fileName);
      const file = await readFile(filePath, { encoding: "utf-8" });
      const json = frontmatter(file);

      return {
        slug: fileName.split(".md")[0],
        ...json.attributes,
        body: json.body
      };
    })
  );
}

async function buildDataset() {
  const apis = await readMarkdownDir(API_DIR);
  const services = await readMarkdownDir(SERVICE_DIR);

  expandAPIsWithServices(apis, services);

  return {
    summary: apis.map(apiToAPIV1),
    apis,
    services
  };
}

module.exports = { buildDataset };
