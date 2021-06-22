// used by node, therefore in plain js
const fs = require('fs');
const sharp = require('sharp');
const folderPath = './public/images/guides';

const readAllGuideImage = async () => {
  console.log(`*** Thumbnails check ***`);

  const files = fs.readdirSync(folderPath, 'utf8');

  const allFiles = new Set();
  files.forEach(fileName => {
    if (fileName === '.DS_Store') {
      return;
    }
    allFiles.add(fileName);
  });

  allFiles.forEach(fileName => {
    if (fileName.indexOf('thumbnail_') > -1) {
      return;
    } else {
      const fileNameRoot = fileName.split('.')[0];
      const fileExtension = fileName.split('.')[1];
      const fileThbName = `thumbnail_${fileNameRoot}.${fileExtension}`;
      if (allFiles.has(fileThbName)) {
        return;
      }
      sharp(`${folderPath}/${fileName}`)
        .resize(340, 200)
        .toFile(`${folderPath}/${fileThbName}`, (err, info) => {
          if (err) {
            console.log(err, info);
          }
          console.log(`New thumbnail : ${fileThbName}`);
        });
    }
  });
  console.log(`*** Thumbnails check done ! ***`);
};

async function main() {
  await readAllGuideImage();
}

main();
