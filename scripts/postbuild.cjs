const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.resolve(__dirname, '..');
const clientDir = path.join(rootDir, 'dist', 'client');
const publishDir = path.join(rootDir, 'dist');

if (!fs.existsSync(clientDir)) {
  console.log('Client build output not found; skipping postbuild copy.');
  process.exit(0);
}

for (const entry of fs.readdirSync(clientDir)) {
  const source = path.join(clientDir, entry);
  const target = path.join(publishDir, entry);
  fs.cpSync(source, target, { recursive: true, force: true });
}

const clientIndexPath = path.join(clientDir, 'index.html');
const publishIndexPath = path.join(publishDir, 'index.html');

if (fs.existsSync(clientIndexPath)) {
  fs.copyFileSync(clientIndexPath, publishIndexPath);
} else {
  const assetDir = path.join(publishDir, 'assets');
  const assetFiles = fs.existsSync(assetDir)
    ? fs
        .readdirSync(assetDir)
        .filter((name) => name.endsWith('.js') || name.endsWith('.css'))
        .sort()
    : [];

  const cssAssets = assetFiles.filter((name) => name.endsWith('.css'));
  const jsAssets = assetFiles.filter((name) => name.endsWith('.js'));

  const htmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#0f172a" />
    <title>Neo Dream Space</title>
${cssAssets.map((file) => `    <link rel="stylesheet" href="/assets/${file}" />`).join('\n')}
  </head>
  <body>
    <div id="root"></div>
${jsAssets.map((file) => `    <script type="module" crossorigin src="/assets/${file}"></script>`).join('\n')}
  </body>
</html>
`;

  fs.writeFileSync(publishIndexPath, htmlContent, 'utf8');
}

console.log('Copied client build output to dist root for Netlify publishing and generated dist/index.html.');
