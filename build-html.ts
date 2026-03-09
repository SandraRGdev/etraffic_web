import fs from 'fs';

async function build() {
  try {
    const res = await fetch('https://www.13g.fr/');
    let html = await res.text();

    // Replacements
    html = html.replace(/Treize grammes - Agence de Branding/g, 'eTraffic Manager - Estudio Digital Premium');
    html = html.replace(/Treize grammes, l'agence de branding digitale/g, 'eTraffic Manager, estudio digital premium');
    
    // Hero
    html = html.replace(/Réveillez<br\/>votre<br\/>croissance/g, 'Multiplica<br/>tu<br/>negocio');
    html = html.replace(/Réveillez<br\/>‍<!-- -->votre<br\/>croissance/g, 'Multiplica<br/>‍<!-- -->tu<br/>negocio');
    html = html.replace(/Activez<br\/>votre<br\/>marque/g, 'Automatiza<br/>tu<br/>empresa');
    html = html.replace(/Agence de design de marque 100% créative : branding, stratégie, site et web app,  identité visuelles./g, 'Estudio digital premium: diseño web, automatizaciones, bots con IA y plataformas web a medida.');
    html = html.replace(/Agence de design de marque 100% créative : branding, stratégie, site et web app,  identités visuelles./g, 'Estudio digital premium: diseño web, automatizaciones, bots con IA y plataformas web a medida.');
    html = html.replace(/Nous accompagnons les entreprises dans leurs étapes de croissance afin de dessiner leurs perspectives d'avenir./g, 'Ayudamos a empresas a crecer con soluciones digitales que ahorran tiempo, mejoran procesos y venden mejor.');
    html = html.replace(/Entreprises innovantes, saas, startups/g, 'Pymes, negocios locales, profesionales');

    // Nav & Buttons
    html = html.replace(/NOS RÉALISATIONS/g, 'SERVICIOS');
    html = html.replace(/NOS NOTES/g, 'CASOS DE ÉXITO');
    html = html.replace(/Contact/g, 'Contacto');
    html = html.replace(/nos offres/g, 'servicios');
    
    html = html.replace(/Création de marque<br\/>et rebranding/g, 'Diseño y<br/>Desarrollo Web');
    html = html.replace(/Pour une image en ligne<br\/>avec vos objectifs/g, 'Webs corporativas y<br/>landing pages');
    html = html.replace(/Création<br\/>de site web/g, 'Automatización<br/>de procesos');
    html = html.replace(/Une expérience<br\/>de marque digitale/g, 'Ahorra horas de<br/>trabajo manual');
    html = html.replace(/Campagnes<br\/>et activation/g, 'Bots con IA<br/>y WhatsApp');
    html = html.replace(/Le bon message pour<br\/>la bonne personne/g, 'Atención al cliente<br/>24/7 automatizada');

    // Video section
    html = html.replace(/Be true/g, 'Diseño Web');
    html = html.replace(/Transformez votre vision entrepreunariale<br\/>en succès commercial/g, 'Webs corporativas y landing pages de alto rendimiento.<br/>Rápidas, seguras y diseñadas para convertir.');
    html = html.replace(/Be strong/g, 'Automatizaciones');
    html = html.replace(/Itérez rapidement sur votre marché et<br\/>conservez votre avantage concurrentiel<br\/>/g, 'Conectamos tus herramientas para que trabajen solas.<br/>Ahorra horas de trabajo manual cada semana.<br/>');
    html = html.replace(/Be bold/g, 'Bots con IA');
    html = html.replace(/Démarquez-vous et affirmez votre<br\/>positionnement avec force/g, 'Atención al cliente 24/7. Responde dudas, agenda citas<br/>y cualifica leads automáticamente.');

    // Services tags
    html = html.replace(/L’image de marque <span class="text-weight-light">au service de l'innovation<\/span>/g, 'Tecnología <span class="text-weight-light">al servicio de tu negocio</span>');
    html = html.replace(/Nous accompagnons depuis plus de dix ans les acteurs de l'innovation et clients BtoB dans la construction de leur identité de marque\. Notre compréhension de ces écosystèmes économiques guide la structuration de nos offres et nous permet de délivrer des solutions complètes et fonctionnelles\./g, 'Entendemos que cada negocio es diferente. Adaptamos la tecnología a tus necesidades específicas para que puedas escalar sin límites.');
    html = html.replace(/Les secteurs d'activités de nos clients :/g, 'Sectores a los que ayudamos:');
    
    html = html.replace(/SaaS/g, 'Clínicas');
    html = html.replace(/Start-up/g, 'Despachos');
    html = html.replace(/Agences/g, 'Ecommerce');
    html = html.replace(/Entreprises à mission/g, 'Academias');

    // Transform ambitions
    html = html.replace(/On transforme <br\/>les ambitions <br\/>en marques/g, 'Transformamos <br/>procesos <br/>en resultados');
    html = html.replace(/Nous fusionnons stratégie, créativité et digital pour incarner votre vision, accompagner votre succès et maximiser son impact\./g, 'Fusionamos estrategia, diseño y automatización para que tu negocio funcione de manera más inteligente y rentable.');
    html = html.replace(/Programmer une visio/g, 'Agendar una llamada');

    // FAQ
    html = html.replace(/Approche méthodique, écoute, transparence, tarification claire, délais respectés… Nous allons vous réconcilier avec les agences\./g, 'Un proceso claro y transparente. Sin sorpresas, orientado a resultados desde el primer día.');
    html = html.replace(/Prenons le temps d'échanger/g, 'Hablemos de tu proyecto');
    html = html.replace(/Une agence de branding c’est quoi \?/g, '¿Cuánto tiempo tardáis en crear una web?');
    html = html.replace(/En résumé, nous créons l'identité des entreprises faisant appelles à nos services\. Cela commence par la stratégie de marque et son choix de positionnement et découle sur le choix des mots employés, le logotype, les couleurs, typographies et l’ensemble des ingrédients qui rendront votre marque unique\. Le but est de vous démarquer et de créer une connexion avec votre audience pour accroitre votre chiffre d’affaire\./g, 'Depende de la complejidad, pero una web corporativa premium suele estar lista entre 3 y 6 semanas. Nos enfocamos en la calidad y en que el resultado final cumpla tus objetivos de negocio.');
    
    html = html.replace(/Qu'est ce qui vous différencie des autres agences \?/g, '¿Hacéis automatizaciones a medida?');
    html = html.replace(/Nos services sont internalisés, assurant une expertise élevée à chaque étape du projet\. Chez nous, pas de commerciaux ou de chefs de projets\. Vous travaillez directement avec des associés, garants de la qualité de notre production\. Notre équipe est composée de concepteurs rédacteurs, stratèges, graphistes, motion et web designers etc\. tous focalisés sur l'excellence et la cohérence de votre marque\./g, 'Sí. Analizamos tus procesos manuales (facturación, seguimiento de leads, emails) y creamos flujos automatizados para que tu equipo ahorre horas cada semana.');

    html = html.replace(/Pourquoi ce nom “Treize grammes” \?/g, '¿Podéis integrar WhatsApp o bots en mi negocio?');
    html = html.replace(/Parce que c’est la dose de créativité idéale pour activer vos marques\.\.\. Mais surtout pour questionner ! D’ailleurs, on nous la pose systématiquement, et vous lisez actuellement ces lignes\. Un bon branding ça sert aussi à intriguer non \?/g, 'Por supuesto. Configuramos bots inteligentes que responden preguntas frecuentes, agendan citas o cualifican clientes directamente desde WhatsApp o tu web, 24/7.');

    // Stats
    html = html.replace(/\+130/g, '+50');
    html = html.replace(/Collaborations menées avec succès/g, 'Proyectos entregados');
    html = html.replace(/\+76/g, '+100');
    html = html.replace(/Marques créées/g, 'Automatizaciones activas');
    html = html.replace(/\+10/g, '+5');
    html = html.replace(/Années d’activité/g, 'Años de experiencia');

    // Big video
    html = html.replace(/Activez votre marque !/g, '¡Digitaliza tu negocio!');

    // Press
    html = html.replace(/Nos réalisations sont régulièrement mises en avant dans la presse et les médias spécialisés :/g, 'Utilizamos las mejores herramientas del mercado:');
    html = html.replace(/Awwward, World Brand Design Club, La Provence, Étape, The Dieline, Behance, Novum, Adobe Create, Packaging of the world, Gooood\.\.\./g, 'React, Next.js, Tailwind CSS, Make, Zapier, OpenAI, n8n, Stripe, Supabase...');

    // Prefooter
    html = html.replace(/Prenez rendez-vous avec l’un de nos associés/g, 'Agenda una llamada con nuestro equipo');

    // Replace logos with text
    html = html.replace(/<svg width="100%" height="100%" viewBox="0 0 194 43" fill="none" xmlns="http:\/\/www.w3.org\/2000\/svg">.*?<\/svg>/gs, '<div style="color: white; font-size: 24px; font-weight: bold; font-family: sans-serif; letter-spacing: -0.5px;">eTraffic Manager</div>');

    // Fix links
    html = html.replace(/href="\/offres\/branding"/g, 'href="#servicios"');
    html = html.replace(/href="\/offres\/web"/g, 'href="#servicios"');
    html = html.replace(/href="\/offres\/campagnes"/g, 'href="#servicios"');
    html = html.replace(/href="\/contact"/g, 'href="#contacto"');

    // Remove the vite script injection if it exists, or we just overwrite index.html entirely
    
    fs.writeFileSync('index.html', html);
    console.log('Successfully built index.html');
  } catch (e) {
    console.error(e);
  }
}

build();
