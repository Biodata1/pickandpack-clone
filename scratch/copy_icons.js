const fs = require('fs');
const path = require('path');

function copyFile(src, dest) {
  fs.copyFileSync(src, dest);
  console.log(`Copied ${src} to ${dest}`);
}

function main() {
  const rootDir = path.join(__dirname, '..');
  const logosDir = path.join(rootDir, 'public', 'printwork', 'logos');
  const publicDir = path.join(rootDir, 'public');
  const appDir = path.join(rootDir, 'src', 'app');

  // Source files
  const pIconClean = path.join(logosDir, 'printwork_p_icon_clean.png');
  const logoPIco = path.join(appDir, 'logo_p.ico');

  // Copy PNG favicons
  if (fs.existsSync(pIconClean)) {
    copyFile(pIconClean, path.join(publicDir, 'favicon.png'));
    copyFile(pIconClean, path.join(publicDir, 'favicon-16x16.png'));
    copyFile(pIconClean, path.join(publicDir, 'favicon-32x32.png'));
    copyFile(pIconClean, path.join(publicDir, 'favicon-192x192.png'));
    copyFile(pIconClean, path.join(publicDir, 'favicon-512x512.png'));
    copyFile(pIconClean, path.join(publicDir, 'apple-touch-icon.png'));
    copyFile(pIconClean, path.join(appDir, 'icon.png'));
    copyFile(pIconClean, path.join(appDir, 'apple-icon.png'));
  } else {
    console.error('Source p_icon_clean.png not found!');
  }

  // Copy ICO favicon
  if (fs.existsSync(logoPIco)) {
    copyFile(logoPIco, path.join(appDir, 'favicon.ico'));
    copyFile(logoPIco, path.join(publicDir, 'favicon.ico'));
  } else {
    console.error('Source logo_p.ico not found!');
  }

  console.log('Icons updated successfully!');
}

main();
