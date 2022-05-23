// used by node, therefore in plain js
const fs = require('fs');
const sharp = require('sharp');
const folderPath = './public/images/guides';

const readAllGuideImage = async () => {
  console.log(`*** Thumbnails check ***`);
  let newThumbnailCount = 0;

  const files = await fs.promises.readdir(folderPath, 'utf8');

  const allFiles = new Set();
  files.forEach(fileName => {
    if (fileName === '.DS_Store') {
      return;
    }
    allFiles.add(fileName);
  });

  await Promise.all(
    Array.from(allFiles).map(async fileName => {
      if (fileName.indexOf('thumbnail_') > -1) {
        return;
      } else {
        const fileNameRoot = fileName.split('.')[0];
        const fileExtension = fileName.split('.')[1];
        const fileThbName = `thumbnail_${fileNameRoot}.${fileExtension}`;
        if (allFiles.has(fileThbName)) {
          return;
        }
        return new Promise((resolve, reject) =>
          sharp(`${folderPath}/${fileName}`)
            .resize(340, 200)
            .toFile(`${folderPath}/${fileThbName}`, (err, info) => {
              if (err) {
                console.log(err, info);
                reject(err);
              }
              console.log(`New thumbnail : ${fileThbName}`);
              newThumbnailCount++;
              resolve();
            })
        );
      }
    })
  );
  console.log(`*** Thumbnails check done ! ***`);
  if (newThumbnailCount > 0) {
    console.log(`Please commit ${newThumbnailCount} new thumbnails.`);
    process.exit(1);
  }
};

readAllGuideImage();
