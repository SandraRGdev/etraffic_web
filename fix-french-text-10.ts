import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const replacements = [
  [/@Benjamin<\/a> 💥 ou <a/g, '@Benjamin</a> 💥 o <a']
];

for (const [regex, replacement] of replacements) {
  html = html.replace(regex, replacement);
}

fs.writeFileSync('index.html', html);
