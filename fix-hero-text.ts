import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/<p class="p-small max-width-xxsmall">.*?<\/p>/g, '<p class="p-small max-width-xxsmall">Estudio digital premium: diseño web, automatizaciones, bots con IA y plataformas web a medida.</p>');
html = html.replace(/<p class="p-small max-width-xxsmall text-color-grey25 hide-tablet">.*?<\/p>/g, '<p class="p-small max-width-xxsmall text-color-grey25 hide-tablet">Estudio digital premium: diseño web, automatizaciones, bots con IA y plataformas web a medida.</p>');
html = html.replace(/<p fade-up="" data-w-id="dea4afbc-80c6-6bb2-10b8-e32c3e235729" class="p-small max-width-xxsmall">.*?<\/p>/g, '<p fade-up="" data-w-id="dea4afbc-80c6-6bb2-10b8-e32c3e235729" class="p-small max-width-xxsmall">Ayudamos a empresas a crecer con soluciones digitales que ahorran tiempo, mejoran procesos y venden mejor.</p>');
html = html.replace(/<p fade-up="" data-w-id="b4a830f5-4070-665c-95e6-470b691a49c1" class="p-small max-width-xxsmall text-color-grey25 hide-tablet">.*?<\/p>/g, '<p fade-up="" data-w-id="b4a830f5-4070-665c-95e6-470b691a49c1" class="p-small max-width-xxsmall text-color-grey25 hide-tablet">Ayudamos a empresas a crecer con soluciones digitales que ahorran tiempo, mejoran procesos y venden mejor.</p>');

fs.writeFileSync('index.html', html);
