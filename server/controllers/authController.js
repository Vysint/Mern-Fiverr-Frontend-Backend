const User = require("../models/user.model");

exports.register = async (req, res) => {
  try {
    const newUser = new User(req.body);

    await newUser.save();
    res.status(201).json({ message: "User created!", user: newUser });
  } catch (err) {
    res.status(500).send("Something went wrong!");
  }
};
