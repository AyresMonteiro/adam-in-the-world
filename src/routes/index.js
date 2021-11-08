const fs = require('fs');
const path = require('path');

const folder = './src/routes/';
const exported = {};

routeFiles = fs.readdirSync(folder);

for (let i = 0; i < routeFiles.length; i++) {
  const banned = ['.', '..', 'index.js', 'Route.js'];

  if (banned.find((val) => val === routeFiles[i])) continue;

  const [contextObject, synonyms] = require(__dirname + '/' + routeFiles[i]);

  for (let j = 0; j < synonyms.length; j++) {
    exported[synonyms[j]] = contextObject;
  }
}

module.exports = exported;
