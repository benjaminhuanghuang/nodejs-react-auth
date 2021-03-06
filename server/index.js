// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup
const DB_URL = 'mongodb://admin:admin123@ds141320.mlab.com:41320/auth'
mongoose.connect(DB_URL);

// App Setup
app.use(morgan('combined'));
// fix error XMLHttpRequest cannot load "..."
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
