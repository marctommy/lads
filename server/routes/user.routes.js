const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
/* GET users listing. */

router.get("/user", function (req, res, next) {
  User.findById(id)
    .then((loggedInUser) => {
      console.log("loggedInUser", loggedInUser);
      res.json("req.user", id);
    })
    .catch((error) => res.json(error));
});

module.exports = router;
