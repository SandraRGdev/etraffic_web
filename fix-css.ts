import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/overflow: visible; !important/g, 'overflow: visible !important;');
fs.writeFileSync('index.html', html);
