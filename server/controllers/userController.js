const User = require("../models/user.model");

const { createError } = require("../utils/createError");

exports.deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can delete only your account!"));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("Account deleted!");
};

exports.getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) return next(createError(404, "User not found!"));

  res.status(200).json(user);
};
