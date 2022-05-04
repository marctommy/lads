import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Activity.css";
import FilterBtn from "./FilterBtn";
import { ItemActivity } from "./ItemActivity";

const Activities = () => {
  const [listOfActivities, setListOfActivities] = useState([
    {
      name: "",
      description: "",
      duration: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3005/api/activities/");
      // console.log(res);

      setListOfActivities(res.data);
    };
    // console.log(listOfActivities);
    fetchData();
  }, []);

  const activities = listOfActivities.map((item) => {
    return <ItemActivity listFromParent={item} />;
  });

  return (
    <div>
      <FilterBtn />
      <Link to="/activities/create" className="activity-btn">
        Create Activity
      </Link>
      {activities}
    </div>
  );
};
export default Activities;
