import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const replacements = [
  [/Une expérience de marque<br\/>digitale qui convertit/g, 'Una experiencia de marca<br/>digital que convierte'],
  [/Création de site web/g, 'Creación de sitios web'],
  [/Offre :/g, 'Oferta :']
];

for (const [regex, replacement] of replacements) {
  html = html.replace(regex, replacement);
}

fs.writeFileSync('index.html', html);
