module.exports.checkUser = (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      res.redirect('/api/user/login');
    }
  };
  module.exports.isAuth = (req, res, next) => {
    if (req.session.user) {
      res.redirect('/');
    } else {
      next();
    }
  };
  