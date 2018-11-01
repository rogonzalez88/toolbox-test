const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const CLIENT_BUILD_PATH = path.join(__dirname, '../../front/build');

// App
const app = express();

// parse application/json
app.use(bodyParser.json())

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// API
app.post('/api/text', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify(req.body, null, 2));
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

module.exports = app;