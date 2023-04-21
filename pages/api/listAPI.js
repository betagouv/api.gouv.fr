import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';

// Fonction pour lire les fichiers markdown du dossier `/data/api`
function getApiData() {
  const apiDirectory = path.join(process.cwd(), '_data', 'api');
  const fileNames = fs.readdirSync(apiDirectory);

  const allApiData = fileNames.map((fileName) => {
    const fullPath = path.join(apiDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Utilisez gray-matter pour extraire les données YAML
    const { data } = grayMatter(fileContents);

    return data;
  });

  return allApiData;
}

// Fonction pour filtrer les propriétés requises
function filterProperties(apiData) {
  return apiData.map((api) => {
    return {
      title: api.title,
      tagline: api.tagline,
      external_site: api.external_site,
      is_open: api.is_open,
      partners: api.partners,
      producer: api.producer,
      keywords: api.keywords,
      contact_link: api.contact_link,
      doc_tech_external: api.doc_tech_external,
      themes: api.themes,
      rate_limiting_resume: api.rate_limiting_resume,
      uptime: api.uptime,
    };
  });
}

export default async function handler(req, res) {
  const apiData = getApiData();
  const filteredApiData = filterProperties(apiData);

  res.status(200).json(filteredApiData);
}
