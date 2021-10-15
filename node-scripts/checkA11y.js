const { exec } = require('child_process');
const fs = require('fs');

console.info('=== A11y checker ===');

const URLS = fs.readFileSync('./public/url-list.txt', {
  encoding: 'utf8',
  flag: 'r',
});

const PAGES = URLS.toString().split('\n').slice(0, 4);

PAGES.forEach(page =>
  exec(
    './node_modules/@axe-core/cli/dist/src/bin/cli.js  ' + page,
    ' --stdout --exit --disable scrollable-region-focusable --disable region',
    (err, stdout, stderr) => {
      if (err || stderr) {
        console.log(err, stderr);
        process.exit(1);
      }
      if (stdout.indexOf('0 violations found!') > -1) {
        console.info('=> ✅ ' + page);
      } else {
        console.info('=> 😭 ' + page);
        console.log(stdout);
        process.exit(1);
      }
    }
  )
);
