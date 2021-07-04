const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
let port = 3040;

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log('listenting on ', port);
});