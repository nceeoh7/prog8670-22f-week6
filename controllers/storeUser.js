const path = require("path");
const User = require("../models/User");

module.exports = async (req, res) => {
  User.create(req.body, (error, user) => {
    console.log(error);
    if (error) {
      return res.redirect("/auth/register");
    }

    res.redirect("/");
  });
};
