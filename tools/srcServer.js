import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config); // create an Express instance

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
