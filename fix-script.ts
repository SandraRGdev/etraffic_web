import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<script src="\nhttps:\/\/cdn\.jsdelivr\.net\/npm\/split-type@0\.3\.4\/umd\/index\.min\.js\n"><\/script>/g, '<script src="https://cdn.jsdelivr.net/npm/split-type@0.3.4/umd/index.min.js"></script>');
fs.writeFileSync('index.html', html);
