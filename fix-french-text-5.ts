import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const replacements = [
  [/Ce que j’ai le plus apprécié dans la collaboration \? La structuration du projet et la mise en problématique\./g, '¿Lo que más aprecié de la colaboración? La estructuración del proyecto y la resolución de problemas.']
];

for (const [regex, replacement] of replacements) {
  html = html.replace(regex, replacement);
}

fs.writeFileSync('index.html', html);
