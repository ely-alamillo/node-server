const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/study-buddies', {useMongoClient: true});

const corsOptions = {
  "origin": "http://localhost:3000",
  "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
  "preflightContinue": true,
  "optionsSuccessStatus": 204,
  "credentials": true // enable set cookie
};

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.static(__dirname));

// const { routes } = require('./api/routes/routes');
// routes(app);

app.get('/', (req, res) => {
  res.render("index")
});
app.get('/api', (req, res) => {
  res.send('hello from node server!')
});

app.listen(3030, '0.0.0.0', () => {
  console.log('server running on port 3030');
});
