const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/kiwi.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
});

app.use('/', express.static(
  path.resolve(__dirname, '../dist')
));

app.listen(9001, function () {
  console.log('Application running @ port #9001');
});