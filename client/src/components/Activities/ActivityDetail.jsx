import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ActivityDetail = () => {
  const { activityId } = useParams();
  const [activity, setActivity] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const activity = await axios.get(
        "http://localhost:3005/api/activities/" + activityId
      );
      // console.log(res);

      setActivity(activity);
    };
    // console.log(listOfActivities);
    fetchData();
  }, []);
  return <div></div>;
};
