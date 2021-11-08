const fs = require('fs');

const folder = './src/routes/';
const exported = {};

files = fs.readdirSync(folder);

for (let i = 0; i < files.length; i++) {
  const banned = ['.', '..', 'index.js', 'Route.js'];

  if (banned.find((val) => val === files[i])) continue;

  const [contextObject, synonyms] = require('./' + files[i]);

  for (let j = 0; j < synonyms.length; j++) {
    exported[synonyms[j]] = contextObject;
  }
}

module.exports = exported;
