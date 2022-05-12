const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
/* GET users listing. */

router.post("/user", function (req, res, next) {
  const { name, email, hobbies } = req.body;
  User.create({ name, email, hobbies })
    .then((dbUser) => {
      console.log("dbUser", dbUser);
      res.json(dbUser);
    })
    .catch((error) => res.json(error));
});

module.exports = router;
