const express = require('express');
const router = express.Router();
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/register', async (req, res) => {
  // 회원가입시 유저가 입력하여 요청과 함께 보낸 정보
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    return res.send('회원 정보를 입력해 주세요');
  }
  // 패스워드 암호화
  const hash = await bcrypt.hash(password, saltRounds);

  User.findOrCreate({
    // db에 같은 이메일이 있는지 조회
    where: { email: email },
    // 나머지 입력할 정보
    defaults: {
      userName: userName,
      password: hash,
    },
  }).then(([result, created]) => {
    if (!created) {
      // created의 값은 boolean
      res.send('이미 존재하는 이메일 입니다');
    } else {
      res.status(201).json({ password: hash, message: 'ok' });
    }
  });
});

module.exports = router;
