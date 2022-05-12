import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Activity.css";
import FilterBtn from "./FilterBtn";
import { ItemActivity } from "./ItemActivity";
import { LoadingComponent } from "../Header/LoadingComponent";
import Weather from "../Features/Weather";
const Activities = ({ loggedInUser }) => {
  const [listOfActivities, setListOfActivities] = useState([
    {
      name: "",
      description: "",
      duration: "",
      category: "",
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

  return !listOfActivities ? (
    <LoadingComponent />
  ) : (
    <div>
      <Weather loggedInUser={loggedInUser} />
      {/* <FilterBtn /> */}
      <Link to="/activities/create" className="activity-btn">
        Create Activity
      </Link>
      {listOfActivities?.map((activity, index) => (
        <ItemActivity activity={activity} key={activity.name} />
      ))}
    </div>
  );
};
export default Activities;
