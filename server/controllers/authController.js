const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User created!", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const isPasswordCorrect = bcrypt.compare(req.body.password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Wrong password!" });
    }

    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};
