const express = require("express");
const router = express.Router();
const User = require("../models/User.model");

router.post("/:id", (req, res) => {
  const { id } = req.params;

  const { name, hobbies, avatarId, eventsAttended } = req.body;

  User.findByIdAndUpdate(id, {
    name,
    hobbies,
    avatarId,
    eventsAttended,
  })
    .then((updatedUser) => {
      console.log(updatedUser);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/:id", function (req, res, next) {
  const { id } = req.params;
  User.findById(id)
    .then((loggedInUser) => {
      console.log("loggedInUser", loggedInUser);
      res.json("req.user", id);
    })
    .catch((error) => res.json(error));
});

module.exports = router;
