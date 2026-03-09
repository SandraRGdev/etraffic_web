import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const replacements = [
  [/chez/g, 'en'],
  [/Avis/g, 'Opiniones'],
  [/Co-fondatrice et/g, 'Co-fundadora y'],
  [/Co-fondateur/g, 'Co-fundador']
];

for (const [regex, replacement] of replacements) {
  html = html.replace(regex, replacement);
}

fs.writeFileSync('index.html', html);
