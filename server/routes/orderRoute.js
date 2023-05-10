const express = require("express");

const { verifyToken } = require("../middleware/jwt");

const { createOrder, getOrders } = require("../controllers/orderController");

const router = express.Router();

router.post("/:gigId", verifyToken, createOrder);

router.get("/", verifyToken, getOrders);

module.exports = router;
