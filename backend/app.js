"use strict";

const express = require('express');
const session = require('express-session');

const crypto = require('crypto');
const app = express();

/**
 * Setup encoding
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Generate random secret key for session
const secretKey = crypto.randomBytes(64).toString('hex');

/**
 * Setup session
 * 
 */
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: true,
  name: 'session-id'
}));

app.use('/api/auth', require('./routes/auth'));

const http = require('http');
const PORT = 3001;

// Create server
const server = http.createServer(app);

// Run server
server.listen(PORT, (err) => {
  if (err) console.error(err);
  else console.log("HTTP server on http://localhost:%s", PORT);
});
