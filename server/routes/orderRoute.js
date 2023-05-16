const express = require("express");

const { verifyToken } = require("../middleware/jwt");

const { createOrder, getOrders, intent } = require("../controllers/orderController");

const router = express.Router();

router.post("/:gigId", verifyToken, createOrder);

router.get("/", verifyToken, getOrders);

router.post("/create-payyment-intent", verifyToken, intent)

module.exports = router;
