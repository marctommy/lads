const express = require("express");
const router = express.Router();
const User = require("../models/User.model");

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const { name, hobbies, avatarId, newEventId } = req.body;

  const loggedInUser = await User.findById(id);
  const { eventsAttended } = loggedInUser;
  // Id already in array?
  const updatedEvents = [...eventsAttended, newEventId];

  User.findByIdAndUpdate(id, {
    name,
    hobbies,
    avatarId,
    eventsAttended: updatedEvents,
  })
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/:id", function (req, res, next) {
  const { id } = req.params;
  User.findById(id)
    .then((loggedInUser) => {
      res.json("req.user", id);
    })
    .catch((error) => res.json(error));
});

module.exports = router;
