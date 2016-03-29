function ensureAuthenticated(req, res, next) {
  // check if user is authenticated
  if(req.user) {
    // if so -> call next()
    return next();
  } else {
    // if not -> redirect to login
    return res.redirect('/login');
  }
}

function ensureTokenAuth(req, res, next) {
  if (!req.header('Authorization')) {
    return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
  }
  var token = req.header('Authorization').split(' ')[1];

  var payload = null;
  try {
    payload = jwt.decode(token, config.TOKEN_SECRET);
  }
  catch (err) {
    return res.status(401).send({ message: err.message });
  }

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: 'Token has expired' });
  }
  req.user = payload.sub;
  next();
}

function createJWT(user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
}

function loginRedirect(req, res, next) {
  // check if user is authenticated
  if(req.user) {
    // if so -> redirect to main route
    return res.redirect('/');
  } else {
    // if not -> call next()
    return next();
  }
}

function hashing (password) {
    console.log('hash all day');
  return bcrypt.hashSync(password, 10);
  // Needs promises otherwise it will not wait to return the newPassword which
    // will make it undefined
//   var newPassword = '';
//   bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash(password, salt, function(err, hash) {
//         newPassword = hash;
//     });
//   });
//   return newPassword;
}

function comparePassword(password, hashedpassword) {
    return bcrypt.compareSync(password, hashedpassword);
}

module.exports = {
  ensureAuthenticated: ensureAuthenticated,
  ensureTokenAuth: ensureTokenAuth,
  createJWT: createJWT,
  loginRedirect: loginRedirect,
  hashing: hashing,
  comparePassword: comparePassword
};
