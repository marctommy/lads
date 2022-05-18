const router = require("express").Router();
const Message = require("../models/Message");
const Activity = require("../models/Activity.model");

router.get("/:activityId", (req, res) => {
  const { activityId } = req.params;
  Activity.findById(activityId)
    .populate("conversation")
    .then((activity) => res.status(200).json(activity.conversation))
    .catch((error) => res.status(500).json(error));
});

router.post("/new-message", (req, res) => {
  const { activityId } = req.params;
  const { sendBy, newMessage, user } = req.body;
  Message.create({
    sendBy: sendBy._id,
    message: newMessage,
  })
    .populate("user")
    .then((newMessage) => res.status(200).json(newMessage))
    .catch((error) => res.status(500).json(error));
});

module.exports = router;
