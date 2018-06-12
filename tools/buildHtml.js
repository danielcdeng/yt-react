// For prod use

/* eslint-disable no-console */

import fs from 'fs';
import cheerio from 'cheerio'; // enable to handle in-memory DOM using jQuery selectors
import colors from 'colors';

//------------------------------------------------------

const dataDir = 'dist/data';

const sys = require('sys');
const exec = require('child_process').exec;
let child;

child = exec('cp src/data/active.json dist/.', function (error, stdout, stderr) {
  if (error !== null) console.log('exec error: ' + error);
});

child = exec('cp src/data/archive.json dist/.', function (error, stdout, stderr) {
  if (error !== null) console.log('exec error: ' + error);
});

child = exec('cp src/data/city.list.json.gz dist/.', function (error, stdout, stderr) {
  if (error !== null) console.log('exec error: ' + error);
});

//------------------------------------------------------

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) return console.log(err);

  const $ = cheerio.load(markup); // creates a handy in-memory DOM

  // Since a separate spreadsheet is only utilized for the production build, need to
  // dynamically
  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('index.html written to /dist'.green);
  });
});
