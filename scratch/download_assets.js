const fs = require('fs');
const https = require('https');
const path = require('path');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${url} to ${dest}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  try {
    const publicDir = path.join(__dirname, '..', 'public');
    const appDir = path.join(__dirname, '..', 'src', 'app');

    // Ensure directories exist
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
    if (!fs.existsSync(appDir)) fs.mkdirSync(appDir, { recursive: true });

    // Download logo_p_black.png
    await download('https://www.printwork.id/logo_p_black.png', path.join(publicDir, 'logo_p_black.png'));

    // Download favicon.ico
    await download('https://www.printwork.id/favicon.ico', path.join(publicDir, 'favicon.ico'));
    await download('https://www.printwork.id/favicon.ico', path.join(appDir, 'favicon.ico'));

    console.log('Assets downloaded successfully!');
  } catch (error) {
    console.error('Error downloading assets:', error);
  }
}

main();
