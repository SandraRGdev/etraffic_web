import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const replacements = [
  [/Nos services sont internalisés, assurant une expertise élevée à chaque étape du projet\. Chez nous, pas de commerciaux ou de chefs de projets\. Vous travaillez directement avec des associés, garants de la qualité de notre production\. Notre équipe est composée de concepteurs rédacteurs, stratèges, graphistes, motion et web designers etc\. tous focalisés sur l&#x27;excellence et la cohérence de votre marque\./g, 'Nuestros servicios son 100% internos, asegurando una alta experiencia en cada etapa del proyecto. Trabajas directamente con los expertos, garantizando la calidad de la producción. Nuestro equipo está compuesto por estrategas, desarrolladores, diseñadores y expertos en IA, todos enfocados en la excelencia y el crecimiento de tu negocio.']
];

for (const [regex, replacement] of replacements) {
  html = html.replace(regex, replacement);
}

fs.writeFileSync('index.html', html);
