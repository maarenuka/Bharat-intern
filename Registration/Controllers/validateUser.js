const User = require("../models/User.js");
exports.validateUser = async (req, res) => {
  const { fullName, username, email, mobile, password, cpwd } = req.body;
  console.log(fullName, username, email, mobile, password, cpwd);
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.redirect("error");
  }
  if (password !== cpwd) {
    res.redirect("error");
  }
  const user = await User.create(req.body);
  if (!user) {
    res.redirect("error");
  }
  res.redirect("success");
};
