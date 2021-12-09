const { readAllApisOnDisk } = require('../readOnDiskForNode');
const fs = require('fs');

test('All Apis appear in Roadmap', async () => {
  const roadmapAsString = fs.readFileSync('./_data/roadmap.md', 'utf8');
  const apis = await readAllApisOnDisk();

  const missingAPI = [];
  apis.forEach(api => {
    const isPresent = roadmapAsString.indexOf(api.path) > -1;
    const isOld = oldAPIs.indexOf(api.title) > -1;

    if (!isOld && !isPresent) {
      missingAPI.push(api.title);
    }
  });
  if (missingAPI.length > 0) {
    console.log(
      `⚠️ one API (or more) are missing from Roadmap : ${missingAPI.join(', ')}`
    );
  }
  expect(missingAPI.length === 0).toBe(true);
});

const oldAPIs = [
  'API Ingres Nomenclatures',
  'API Ingres Noyau',
  'Légifrance Bêta',
  'API La Bonne Boite',
  'API Référentiel SANDRE Version 1',
  'API Bulletin officiel des annonces des marchés publics (BOAMP)',
  'API Bulletin officiel des annonces civiles et commerciales (BODACC)',
  'API Camino',
  'API Entreprise',
  'API Découpage Administratif - (API Geo)',
  'API Indemnités Journalières de la CNAM',
  'API Infotravail',
  "API de droits à l'Assurance Maladie",
  "Annuaire des établissements publics de l'administration",
  "Hub'Eau - Hydrométrie",
  "Hub'Eau - Indicateurs Eau potable et Assainissement",
  "Hub'Eau - Piézométrie",
  "Hub'Eau - Etat piscicole des rivières",
  "Hub'Eau - Prélèvements en eau",
  "Hub'Eau - Qualité des nappes d'eau souterraine",
  "Hub'Eau - Qualité des cours d'eau",
  "Hub'Eau - Température des cours d'eau",
  'API Look4 Géoportail',
  "Offres d'emploi",
  'API Résultats aux examens',
  'API Adresse (Base Adresse Nationale - BAN)',
  'API BOAMP',
  'Données transports Brest métropole',
  'API Chorus Pro',
  'FranceConnect et les API FranceConnectées',
  'API Indicateur de Fréquences de Traitements phytopharmaceutiques',
  'le.taxi',
  'OpenFisca',
  'API RVA Rennes Métropole',
  'API travaux Rennes Métropole',
  'API Sirene',
  'Données temps réel pour les transports en commun',
  'API simulateur de financement de formation',
  'Webstat',
];
