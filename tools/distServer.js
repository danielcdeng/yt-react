import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  const fileSent = path.join( __dirname, '../dist/index.html');
  console.log('fileSent = ', fileSent);
  res.sendFile(fileSent);
});

app.get('/active.json', function(req, res) {
  const fileSent = path.join( __dirname, '../dist/active.json');
  console.log('fileSent = ', fileSent);
  res.sendFile(fileSent);
});

app.get('/archive.json', function(req, res) {
  const fileSent = path.join( __dirname, '../dist/archive.json');
  console.log('fileSent = ', fileSent);
  res.sendFile(fileSent);
});

app.get('/US.city.list.json', function(req, res) {
  const fileSent = path.join( __dirname, '../src/data/US.city.list.json');
  console.log('fileSent = ', fileSent);
  res.sendFile(fileSent);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
