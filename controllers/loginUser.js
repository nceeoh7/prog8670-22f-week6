const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          res.redirect("/");
          //TODO:: Store logged in status in session
        } else {
          res.redirect("/auth/login");
        }
      });
    }
  });
};
