const express = require("express");
const router = express.Router();
const { getReview } = require("../controllers/ai.controllers");

router.post("/get-review", getReview);

module.exports = router;
