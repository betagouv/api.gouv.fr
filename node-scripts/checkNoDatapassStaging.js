const { exec } = require('child_process');

exec("grep -rnw './_data/' -e 'datapass-staging'", (err, stdout, stderr) => {
  if (stdout) {
    console.log(stdout);
    process.exit(1);
  }
  process.exit(0);
});
