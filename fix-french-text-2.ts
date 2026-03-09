import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const replacements = [
  // Services intro
  [/L’image de marque <span class="text-weight-light">au service de l&#x27;innovation<\/span>/g, 'Tecnología <span class="text-weight-light">al servicio de la innovación</span>'],
  [/Nous accompagnons depuis plus de dix ans les acteurs de l&#x27;innovation et clients BtoB dans la construction de leur identité de marque\. Notre compréhension de ces écosystèmes économiques guide la structuration de servicios et nous permet de délivrer des solutions complètes et fonctionnelles\./g, 'Llevamos años acompañando a empresas innovadoras y clientes B2B en la digitalización de sus procesos. Nuestra comprensión de estos ecosistemas económicos guía la estructuración de nuestros servicios y nos permite ofrecer soluciones completas y funcionales.'],
  [/Les secteurs d&#x27;activités de nos clients :/g, 'Sectores de actividad de nuestros clientes:'],
  
  // Tags
  [/Outils métiers/g, 'Herramientas a medida'],
  [/Automatisation/g, 'Automatización'],
  [/Formation/g, 'Formación'],
  [/Ingénierie/g, 'Ingeniería'],
  [/Produit Digital/g, 'Producto Digital'],
  [/Technologie/g, 'Tecnología'],
  [/Hôtellerie innovante/g, 'Hostelería innovadora'],
  [/Transition écologique/g, 'Transición ecológica'],
  [/Associations/g, 'Asociaciones'],
  
  // Testimonials
  [/Sur l&#x27;ensemble des dossiers pour lesquels nous les avons sollicités, les équipes de 13G se sont toujours montrées très rigoureuses dans la gestion de projet, disponibles, professionnelles et créatives\./g, 'En todos los proyectos para los que los hemos solicitado, el equipo de eTraffic Manager siempre se ha mostrado muy riguroso en la gestión de proyectos, disponible, profesional y resolutivo.'],
  [/Merci encore pour ce travail de collaboration et de réussite ! Nous sommes très fiers de notre nouvelle identité\./g, '¡Gracias de nuevo por este trabajo de colaboración y éxito! Estamos muy orgullosos de nuestra nueva plataforma.'],
  [/Toujours disponibles pour discuter de nos préoccupations, les équipes ont fait un excellent travail en nous tenant informés tout au long du projet\. Leur expertise dans l’image de marque a grandement contribué à la réussite de notre projet\./g, 'Siempre disponibles para discutir nuestras preocupaciones, el equipo hizo un excelente trabajo manteniéndonos informados durante todo el proyecto. Su experiencia en automatización contribuyó enormemente al éxito de nuestro proyecto.'],
  [/Dans le cadre de la refonte globale du branding de La Briqueterie, j’ai apprécié l’écoute de l&#x27;équipe et le timing maîtrisé\. Nous sommes arrivés à prendre du recul grâce aux méthodologies et ateliers pour aboutir sereinement sur une décision finale\./g, 'En el marco del rediseño global de nuestra web, aprecié la escucha del equipo y el control de los tiempos. Logramos tomar perspectiva gracias a sus metodologías para llegar serenamente a un resultado final excelente.'],
  [/La méthode est d&#x27;une efficacité redoutable ! Les membres de 13G ont eu cette capacité de capter nos personnalités respectives, nos enjeux et de nous proposer une identité ultra cohérente dont nous sommes vraiment fiers mon associé et moi, mais aussi nos collaborateurs qui avaient des étoiles dans les yeux à chaque restitution !/g, '¡El método es de una eficacia temible! Los miembros de eTraffic Manager tuvieron la capacidad de captar nuestras necesidades y proponernos un sistema automatizado ultra coherente del que estamos realmente orgullosos mi socio y yo.'],
  [/il y a un an/g, 'hace un año']
];

for (const [regex, replacement] of replacements) {
  html = html.replace(regex, replacement);
}

fs.writeFileSync('index.html', html);
