const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoute = require("./routes/userRoute");
const gigRoute = require("./routes/gigRoute");
const orderRoutes = require("./routes/orderRoute");
const conversationRoute = require("./routes/conversationRoute");
const messageRoute = require("./routes/messageRoute");
const reviewRoute = require("./routes/reviewRoute");
const authRoute = require("./routes/authRoute");

const app = express();
dotenv.config();

app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Connected to MongoDB");
  } catch (err) {
    throw err;
  }
};

app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/gigs", gigRoute);
// app.use("/api/orders", orderRoute);
// app.use("/api/conversations", conversationRoute);
// app.use("/api/messages", messageRoute);
// app.use("/api/reviews", reviewRoute);

app.listen(process.env.PORT, () => {
  connect();
  console.log("Server running!");
});
