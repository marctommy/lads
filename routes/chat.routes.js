const router = require("express").Router();
const Message = require("../models/Message");
const Activity = require("../models/Activity.model");

router.get("/:activityId", (req, res) => {
  const { activityId } = req.params;
  Activity.findById(activityId)
    .populate({
      path: "conversation",
    })
    .then((activity) => res.status(200).json(activity.conversation))
    .catch((error) => res.status(500).json(error));
});

router.post("/:activityId/new-message", (req, res) => {
  const { activityId } = req.params;
  const { sendBy, newMessage } = req.body;
  console.log("activityId:", activityId);
  Message.create({
    sendBy: sendBy,
    message: newMessage,
  })
    .then((newMessage) => {
      Activity.findByIdAndUpdate(activityId, {
        $push: { conversation: newMessage },
      }).then(() => {
        res.status(200).json(newMessage);
      });
    })
    .catch((error) => res.status(500).json(error));
});

module.exports = router;
