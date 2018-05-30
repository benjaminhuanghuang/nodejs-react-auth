const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

// User id encoded by secret string  = JSON web token
// Token decoded by secret string = user id
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  // subject(ower id of token) and issued at time
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function (req, res, next) {
  // User has already had their email and password auth'd in passport
  // We just need to give them a token
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }

  // See if a user with the given email exists
  User.findOne({ email: email }, function (err, result) {
    if (err) { return next(err); }

    // If a user with email does exist, return an error
    if (result) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // If a user with email does NOT exist, create and save user record
    const user = new User({
      email: email,
      password: password
    });

    user.save(function (err) {
      if (err) { return next(err); }

      // res.json({ success: true });
      // Repond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
}
