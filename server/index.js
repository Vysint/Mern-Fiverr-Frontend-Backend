const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Connected to MongoDB");
  } catch (err) {
    throw err;
  }
};

app.listen(process.env.PORT, () => {
  connect();
  console.log("Server running!");
});
