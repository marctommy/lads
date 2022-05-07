const express = require("express");
const { update } = require("../models/Activity.model");
const router = express.Router();
const Activity = require("../models/Activity.model");

router.post("/create", (req, res) => {
  const { name, description, duration } = req.body;
  console.log(req.body);
  Activity.create({ name, description, duration })
    .then((newActivity) => {
      console.log(newActivity);
      res.json(newActivity);
    })
    .catch((error) => console.log(error));
});

router.get("/", function (req, res, next) {
  // console.log("activities", res.json);
  Activity.find()
    .populate("user")
    .sort({ $natural: -1 })
    .then((allActivities) => {
      res.json(allActivities);
    })
    .catch((error) => res.json(error));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Activity.findById(id)
    .populate("conversation")
    .then((activity) => {
      res.json(activity);
    })
    .catch((error) => res.json(error));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, duration, category } = req.body;
  Activity.findByIdAndUpdate(id, { name, description, duration })
    .then(() => {
      res.json({ message: `Activity ${id} was successfully updated` });
    })
    .catch((error) => {
      res.json(error);
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Activity.findByIdAndDelete(id)
    .then(() => {
      res.json({ message: `Activity ${id} has been deleted successfully` });
    })
    .catch((error) => res.json(error));
});

module.exports = router;
