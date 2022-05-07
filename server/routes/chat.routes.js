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
  const { sendBy, newMessage } = req.body;
  Message.create({
    sendBy: sendBy._id,
    message: newMessage,
  })
    .then((newMessage) => res.status(200).json(newMessage))
    .catch((error) => res.status(500).json(error));
});

module.exports = router;
