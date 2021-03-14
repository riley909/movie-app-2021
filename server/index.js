require('dotenv').config();
const https = require('https');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

// application/json 타입을 가져올 수 있게 하는 옵션
app.use(express.json());
// application/x-www-form-urlencoded 타입의 데이터를 분석해서 가져올 수 있게 하는 옵션
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['https://localhost:3000'],
    methods: ['GET', 'POST', 'OPTION'],
    credentials: true,
  })
);

app.use(cookieParser());

// routes를 관리하는 폴더 생성
// /routes/users 는 회원가입에 관련한 요청을 관리
// controller를 사용하지 않는 예시
app.use('/api/users', require('./routes/users'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  // All the javascript and css files will be read and served from this folder
  app.use(express.static('client/build'));

  // index.html for all page routes    html or routing and naviagtion
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

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
  console.log(`🚀 HTTPS Server listening on port ${PORT}`);
} else {
  server = app.listen(PORT);
  console.log(`🚀 Server listening on port ${PORT}`);
}
module.exports = server;
