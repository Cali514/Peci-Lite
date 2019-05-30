// Get dependencies
const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

// Parsers for POST data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Get our  routes
//const login = require('./server/routes/login');
const api = require('./server/routes/api');


mongoose.connect('mongodb://localhost:27017/confCollab', {
  useNewUrlParser: true,
});

mongoose.set('useCreateIndex', true);


app.use(cors());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/peci')));

// Set our logi routes
//app.use('/login', login);

// Set our api routes
app.use('/api', api);



// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/peci/index.html'));
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3002';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
