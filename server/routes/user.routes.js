const express = require("express");
const router = express.Router();
const User = require("../models/User.model");

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const { name, description, hobbies, avatarId, newEventId, location } =
    req.body;

  const loggedInUser = await User.findById(id);
  const { eventsAttended } = loggedInUser;
  // Id already in array?
  const updatedEvents = [...eventsAttended, newEventId];

  User.findByIdAndUpdate(
    id,
    {
      name,
      description,
      hobbies,
      avatarId,
      eventsAttended: updatedEvents,
      location: location,
    },
    { new: true }
  )
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
