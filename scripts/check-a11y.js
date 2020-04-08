const { exec } = require('child_process');
const fs = require('fs');

fs.readFile('./public/url-list.txt', (err, urls) => {
  if (err) throw err;
  exec(
    'npx axe ' +
      urls
        .toString()
        .split('\n')
        .join(' '),
    (err, stdout, stderr) => {
      console.log(err, stdout, stderr);
    }
  );
});
