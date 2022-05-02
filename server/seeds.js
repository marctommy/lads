const mongoose = require("mongoose");
const Activity = require("./models/Activity");

mongoose.connect("mongodb://localhost/lads", {});

const activities = [
  {
    name: "Running",
    description: "Morning Run",
    duration: 1,
  },
];
Activity.create(activities).then((activitiesFromDb) => {
  console.log(activitiesFromDb);
});
