const blc = require('broken-link-checker');
const link = require('linkinator');

let brokenLinks = 0;
let totalLinks = 0;
const start = new Date();

const IGNORE = [
  'https://www.eaufrance.fr/', // block robots site
  'https://www.linkedin.com/in/romain-tales-5969737', // block robots site
  'https://www.linkedin.com/in/stanislas-bernard-3b14b586/', // block robots site
  'https://www.linkedin.com/in/vmazalaigue/', // block robots site
  'https://www.linkedin.com/in/rapha%C3%ABl-dubigny-a085034a/', // block robots site
  'https://www.linkedin.com/in/maellegranon/', // block robots site
  'https://www.linkedin.com/in/xavier-jouppe-a9030579/', // block robots site
  'https://www.linkedin.com/in/patrick-amarelis-8853205/', // block robots site
  'https://www.linkedin.com/in/amandineaudras/', // block robots site
  'https://www.linkedin.com/in/christophegaie/', // block robots site
  'http://chorus-pro.gouv.fr/qualif/', // shitty site
  'http://chorus-pro.gouv.fr/cpp/', // shitty site
  'https://www.inpi.fr/fr/contactez-nous', // weird site
  'https://data.inpi.fr/register', // weird site
  'http://legroupe.laposte.fr/', // issue with certificate ?
  'https://api.camino.beta.gouv.fr', //400 bad request but open in browser
  'https://www.service-public.fr/particuliers/vosdroits/F2405', // strange stuff with 301 and 302 in service public fr
  'https://www.service-public.fr/partenaires/comarquage/documentation', // same
  'http://webstat.banque-france.fr/fr/', // 15s load
  'https://doc.transport.data.gouv.fr/producteurs/operateurs-de-transport-regulier-de-personnes/temps-reel-des-transports-en-commun', //204 no content but page load
  'https://www.inpi.fr/sites/default/files/inpi_doc_tech_rbe_api_fevrier_2020_v1.4.pdf',
  'https://www.inpi.fr/sites/default/files/inpi_doc_tech_rbe_xml_api_sept_2020_v1.0.pdf',
  'https://www.inpi.fr/sites/default/files/inpi_doc_tech_rbe_api_fevrier_2020_v1.4.pdf',
  'https://geo.pays-de-brest.fr/donnees/Documents/Public/DocWebServicesTransport.pdf',
  'https://geo.pays-de-brest.fr/zapp/Pages/Demande-compte.aspx',
];

const urlChecker = new blc.SiteChecker(
  {
    honorRobotExclusions: true,
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
  },
  {
    link: function(result) {
      totalLinks++;

      /* need to use `process.stdout.write` because console.log print a newline character */
      /* \r clear the current line and then print the other characters making it looks like it refresh*/
      process.stdout.write(`\r${totalLinks} links checked`);

      if (IGNORE.indexOf(result.url.original) > -1) {
        return;
      }

      // legifrance too slow
      if (result.url.original.indexOf('www.legifrance.gouv.fr') > -1) {
        return;
      }

      if (result.broken) {
        console.log(`===[BROKEN LINK=${result.brokenReason}] 💔===`);
        console.log(`LINK: ${result.url.original}`);
        console.log(`PAGE: ${result.base.original}`);
        if (
          result.http &&
          result.http.response &&
          result.http.response.statusCode !== 404
        ) {
          console.log(`RESPONSE_DETAIL: ${result.http.response.statusMessage}`);
        }
        console.log('');
        brokenLinks++;
      } else if (result.excluded) {
        const warning = `===[EXCLUDED=${result.excludedReason}] ✋ LINK: ${result.url.original}===`;
        console.log(warning);
      }
    },
    end: function() {
      const end = new Date() - start;

      console.info('=== Broken links checker ===');
      console.info('Execution time: %dms', end);
      console.log(`${totalLinks} links checked.`);
      if (brokenLinks > 0) {
        console.log(`${brokenLinks} links are broken.`);
        process.exit(1);
      } else {
        console.log(`OK it’s fine.`);
      }
    },
  }
);

urlChecker.enqueue('http://localhost:3000');
