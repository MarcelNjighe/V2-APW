const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../loginn/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome.pug'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = router;
