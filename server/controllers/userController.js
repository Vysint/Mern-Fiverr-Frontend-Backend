const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

exports.deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  const token = req.cookies.accessToken;

  if (!token)
    return res.status(401).json({ Message: "You are not authenticated!" });

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (payload.id !== user._id.toString()) {
      return res.status(403).send("You can delete only your account!");
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("Account deleted!");
  });
};
