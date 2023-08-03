const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
router.get('', (req, res) => {
  res.send('User routes are working');
});

// Register user
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User.create({ name, email, password });
    await user.save();
    res.status(201).send({ user, message: 'User created Successfully' });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// Login user

module.exports = router;
