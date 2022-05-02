const express = require("express");
const router = express.Router();
const Activity = require("../models/Activity");

/* GET home page. */
router.get("/activities", function (req, res, next) {
  console.log("activities", res.json);
});

module.exports = router;
