import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import fs from 'fs';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config); // create an Express instance

function readFile(srcPath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(srcPath, 'utf8', function (err, data) {
      if (err) {
        console.log('err = ', err);
        reject(err);
      }
      else {
        data = JSON.parse(data);
        resolve(data);
      }
    });
  });
}

function writeFile(savPath, data) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(savPath, data, function (err) {
      if (err) {
        reject(err);
      }
      else {
        resolve();
      }
    });
  });
}

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, // don't want information on the command line when it runs
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

//The wildcard means to send index.html for every request we receive.
app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.get('/active.json', function(req, res) {
  const fileSent = path.join( __dirname, '../src/data/active.json');
  console.log('fileSent = ', fileSent);
  res.sendFile(fileSent);
});

app.get('/archive.json', function(req, res) {
  const fileSent = path.join( __dirname, '../src/data/archive.json');
  console.log('fileSent = ', fileSent);
  res.sendFile(fileSent);
});

app.get('/US.city.list.json', function(req, res) {
  const fileSent = path.join( __dirname, '../src/data/US.city.list.json');
  console.log('fileSent = ', fileSent);
  res.sendFile(fileSent);
});

/*
 * This is to extract all the cities of, e.g., 'US', from '../src/data/city.list.json'
 * and sort them alphabetically according to the city name.
 * One time execution only.
 * Other files needs to attend to:
 * a). (root) index.js
 */
app.get('/extract.city.list.json', function(req, res) {
  const srcFile = path.join(__dirname, '../src/data/city.list.json'); // all cities world-wide
  const fileSent = path.join(__dirname, '../src/data/US.city.list.json');
  readFile(srcFile)
  .then(srcData => {
    //srcData = JSON.parse(srcData);
    let usData = [];
    for (let idx = 0; idx < srcData.length; idx++) {
      if (srcData[idx].country == 'US') usData.push(srcData[idx]);
    }
    usData = usData.sort((a, b) => {
      const alat = a.coord.lat;
      const blat = b.coord.lat;
      if (alat < blat) {
        return -1;
      } else {
        return 1;
      }
    });
    return writeFile(fileSent, JSON.stringify(usData));
  })
  .then(function(){
    console.log('fileSent = ', fileSent);
    res.sendFile(fileSent);
  });
});
/**/

app.get('/city.list.json.gz', function(req, res) {
  const fileSent = path.join( __dirname, '../src/data/city.list.json.gz');
  console.log('fileSent = ', fileSent);
  res.sendFile(fileSent);
});

// Start the Express:
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
