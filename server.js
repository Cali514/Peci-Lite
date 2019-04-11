// Get dependencies
const express = require('express');
var request = require('request');
var cors = require('cors');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

// Get our API routes
const api = require('./server/routes/api');


app.use(cors());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/peci')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/peci/index.html'));
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
