var express = require('express');
var passport = require('passport');

var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

module.exports = router;