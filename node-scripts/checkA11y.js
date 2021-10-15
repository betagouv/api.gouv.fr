const { exec } = require('child_process');
const fs = require('fs');

console.info('=== A11y checker ===');

const URLS = fs.readFileSync('./public/url-list.txt', {
  encoding: 'utf8',
  flag: 'r',
});

// we randomly select pages
const pagesForA11y = URLS.toString()
  .split('\n')
  .filter(() => Math.random() < 0.4)
  .filter(page => page.indexOf('documentation/') === -1)
  .map(url => url.replace('https://api.gouv.fr', 'http://localhost:3000'));

exec(
  './node_modules/@axe-core/cli/dist/src/bin/cli.js  ' + pagesForA11y.join(' '),
  ' --stdout --exit --disable scrollable-region-focusable --disable region',
  (err, stdout, stderr) => {
    if (err || stderr) {
      console.log(err, stderr);
      process.exit(1);
    }
    if (stdout.indexOf('0 violations found!') > -1) {
      console.info('=> ✅ A11y is 👌');
    } else {
      console.info('=> 😭 Ally is 👎');
      console.log(stdout);
      process.exit(1);
    }
  }
);
