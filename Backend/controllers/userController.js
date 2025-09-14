const User = require("../models/User");
const Watchlist = require("../models/Watchlist");

// Existing profile & watchlist functions...

// Admin: get all users
exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

// Admin: delete user
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: "User deleted" });
};
