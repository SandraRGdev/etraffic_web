import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const replacements = [
  [/CEO en lempire et lemlist/g, 'CEO en lempire y lemlist']
];

for (const [regex, replacement] of replacements) {
  html = html.replace(regex, replacement);
}

fs.writeFileSync('index.html', html);
