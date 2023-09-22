const { exec } = require('child_process');

exec("grep -rnw './_data/' -e 'staging.datapass'", (err, stdout, stderr) => {
  if (stdout) {
    console.log(stdout);
    process.exit(1);
  }
  process.exit(0);
});
