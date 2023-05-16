const express = require("express");

const { verifyToken } = require("../middleware/jwt");

const { getOrders, intent } = require("../controllers/orderController");

const router = express.Router();



router.get("/", verifyToken, getOrders);

router.post("/create-payyment-intent/:id", verifyToken, intent);

module.exports = router;
