import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const replacements = [
  // Hero texts that might have been missed
  [/Nous accompagnons les entreprises dans leurs étapes de croissance afin de dessiner leurs perspectives d&#x27;avenir\./g, 'Acompañamos a las empresas en sus etapas de crecimiento para diseñar sus perspectivas de futuro y escalar sus ventas.'],
  [/Agence de design de marque 100% créative : branding, stratégie, site et web app,  identités visuelles\./g, 'Estudio digital premium: diseño web, automatizaciones, bots con IA y plataformas web a medida.'],
  
  // FAQ Answers
  [/En résumé, nous créons l&#x27;identité des entreprises faisant appelles à nos services\. Cela commence par la stratégie de marque et son choix de positionnement et découle sur le choix des mots employés, le logotype, les couleurs, typographies et l’ensemble des ingrédients qui rendront votre marque unique\. Le but est de vous démarquer et de créer une connexion avec votre audience pour accroitre votre chiffre d’affaire\./g, 'En resumen, crearemos el ecosistema digital de las empresas que confían en nosotros. Esto comienza con una estrategia sólida y se traduce en plataformas web rápidas, automatizaciones eficientes y bots de IA que atienden a tus clientes 24/7. El objetivo es destacar, ahorrar tiempo y aumentar tu facturación.'],
  
  // FAQ Questions
  [/Qu&#x27;est ce qui vous différencie des autres agences \?/g, '¿Qué os diferencia de otras agencias?'],
  
  // Articles / Mentions
  [/Collaboration avec Adobe pour la création d’une série d’éléments graphiques propulsés sur leur blog et réseaux sociaux \(Behance, Instagram\) et interview de l’agence Treize grammes\./g, 'Colaboración con Adobe para la creación de una serie de elementos gráficos impulsados en su blog y redes sociales (Behance, Instagram) y entrevista a eTraffic Manager.'],
  [/Interview de l’agence et rétrospective de nos réalisations dans le n°10\.19 de le magazine allemand\/anglais Novum\./g, 'Entrevista a la agencia y retrospectiva de nuestros logros en el n°10.19 de la revista alemana/inglesa Novum.'],
  [/Mise en avant par la plateforme creative internationale Behance de 9 réalisations depuis 2017\. Ce réseau social, désormais détenu par Adobe et dont le siège est basé à New York met en avant le meilleur de la scène créative internationale tous secteurs confondus \(graphisme, UI, UX, publicité, produit, motion design, branding etc\.\)\./g, 'Destacados por la plataforma creativa internacional Behance con 9 proyectos desde 2017. Esta red social, ahora propiedad de Adobe y con sede en Nueva York, destaca lo mejor de la escena creativa internacional en todos los sectores (diseño, UI, UX, publicidad, producto, motion design, branding, etc.).'],
  
  // Footer
  [/Esprits créatifs <br\/>pour marques créatives/g, 'Soluciones digitales <br/>para marcas ambiciosas'],
  [/Réalisations/g, 'Proyectos'],
  [/Campagne/g, 'Campañas'],
  
  // Meta tags
  [/Treize grammes, l&#x27;agence de branding digitale qui transforme les ambitions en marques bold\. Identités visuelles, stratégie de marque et création de sites web sur mesure pour amplifier les succès\./g, 'eTraffic Manager, el estudio digital que transforma ambiciones en negocios escalables. Diseño web, automatizaciones con IA y plataformas a medida para amplificar tu éxito.']
];

for (const [regex, replacement] of replacements) {
  html = html.replace(regex, replacement);
}

fs.writeFileSync('index.html', html);
