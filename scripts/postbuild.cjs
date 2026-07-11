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

console.log('Copied client build output to dist root for Netlify publishing.');
