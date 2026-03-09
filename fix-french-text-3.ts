import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const replacements = [
  [/Le bon message pour les bonnes personnes/g, 'El mensaje correcto para las personas adecuadas'],
  [/Découvrir/g, 'Descubrir'],
  [/Prenons le temps d&#x27;échanger/g, 'Hablemos de tu proyecto'],
  [/Très cool de bosser avec vous ! Merci pour l&#x27;implication ❤️/g, '¡Genial trabajar con vosotros! Gracias por la implicación ❤️'],
  [/Nous accompagnons depuis plus de dix ans les acteurs de l&#x27;innovation et clients BtoB dans la construction de leur identité de marque\. Notre compréhension de ces écosystèmes économiques guide la structuration de servicios et nous permet de délivrer des solutions complètes et fonctionnelles\./g, 'Llevamos años acompañando a empresas innovadoras y clientes B2B en la digitalización de sus procesos. Nuestra comprensión de estos ecosistemas económicos guía la estructuración de nuestros servicios y nos permite ofrecer soluciones completas y funcionales.']
];

for (const [regex, replacement] of replacements) {
  html = html.replace(regex, replacement);
}

fs.writeFileSync('index.html', html);
