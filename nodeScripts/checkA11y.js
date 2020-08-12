const { exec } = require('child_process');
const fs = require('fs');

fs.readFile('./public/url-list.txt', (err, urls) => {
  if (err) throw err;
  exec(
    './node_modules/axe-cli/axe-cli ' +
      urls
        .toString()
        .split('\n')
        .join(' '),
    (err, stdout, stderr) => {
      console.log(err, stdout, stderr);
      throw new Error('Should not happen');
    }
  );
});
