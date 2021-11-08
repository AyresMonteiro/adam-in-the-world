const fs = require('fs');

const folder = './src/routes/text/';
const exported = {};
const folderSynonyms = require('./synonyms');

files = fs.readdirSync(folder);

for (let i = 0; i < files.length; i++) {
  const banned = ['.', '..', 'index.js', 'synonyms.js'];

  if (banned.find((val) => val === files[i])) continue;

  const [routeClass, synonyms] = require(__dirname + '/' + files[i]);

  for (let j = 0; j < synonyms.length; j++) {
    exported[synonyms[j]] = routeClass;
  }
}

module.exports = [exported, folderSynonyms];
