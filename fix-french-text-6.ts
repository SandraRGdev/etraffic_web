import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const replacements = [
  [/Ce que j’ai le plus apprécié durant notre collaboration, c’est la communication, les paris osés de 13G, une belle synergie, de la compréhension !/g, 'Lo que más aprecié durante nuestra colaboración fue la comunicación, las apuestas audaces de eTraffic Manager, ¡una gran sinergia y comprensión!']
];

for (const [regex, replacement] of replacements) {
  html = html.replace(regex, replacement);
}

fs.writeFileSync('index.html', html);
