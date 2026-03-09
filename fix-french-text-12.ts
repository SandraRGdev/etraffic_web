import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const replacements = [
  [/Création  de site marketing <br\/>avec enjeux de conversions\./g, 'Creación de sitios web <br/>optimizados para convertir.'],
  [/Directrice de pôle Institut National/g, 'Directora de área Instituto Nacional']
];

for (const [regex, replacement] of replacements) {
  html = html.replace(regex, replacement);
}

fs.writeFileSync('index.html', html);
