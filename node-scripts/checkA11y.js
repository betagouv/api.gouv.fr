const { exec } = require('child_process');
const fs = require('fs');

console.info('=== A11y checker ===');

fs.readFile('./public/url-list.txt', (err, urls) => {
  if (err) throw err;
  exec(
    'axe ' +
      urls.toString().split('\n').join(' ') +
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
  );
});
