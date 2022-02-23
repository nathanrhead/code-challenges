'use strict';

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.status(200).sendFile('/index.html'));
app.get('/addresses', (req, res) => {
  res.status(200).sendFile(__dirname + '/addresses.json');
  
});

module.exports = {
  server: app,
  start: port => {
    if (!port) throw new Error ('The port is missing.');
    app.listen(port, () => console.log(`Order up on ${port}!`));
  }
}