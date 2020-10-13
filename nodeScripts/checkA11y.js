const { exec } = require('child_process');
const fs = require('fs');

const start = new Date();

fs.readFile('./public/url-list.txt', (err, urls) => {
  if (err) throw err;
  exec(
    './node_modules/axe-cli/axe-cli ' +
      // 'http://localhost:3000/les-api/franceconnect --exit --disable scrollable-region-focusable region',
      urls
        .toString()
        .split('\n')
        .join(' ') +
      ' --stdout --exit --disable scrollable-region-focusable --disable region',
    (err, stdout, stderr) => {
      const end = new Date() - start;

      console.info('=== A11y checker ===');
      console.info('Execution time: %dms', end);
      console.log(stdout);
    }
  );
});
