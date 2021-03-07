const https = require('https');
const fs = require('fs');
const cors = require('cors');
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const session = require('express-session');

const PORT = process.env.PORT || 4000;

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      domain: 'localhost',
      path: '/',
      maxAge: 24 * 6 * 60 * 10000,
      sameSite: 'none',
      httpOnly: true,
      secure: true,
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: 'https://localhost:3000',
    methods: ['GET', 'POST', 'OPTION'],
    credentials: true,
  })
);
// Set static folder
// All the javascript and css files will be read and served from this folder
app.use(express.static('client/build'));

// app.use('/', ) 라우터

let server;

if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  server = https
    .createServer(
      {
        key: fs.readFileSync(__dirname + `/` + 'key.pem', 'utf-8'),
        cert: fs.readFileSync(__dirname + `/` + 'cert.pem', 'utf-8'),
      },
      app
    )
    .listen(PORT);
} else {
  server = app.listen(PORT);
}
module.exports = server;
