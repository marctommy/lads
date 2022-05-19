import React, { useState } from "react";
import axios from "axios";
const AttendeeToggle = ({ loggedInUser, activity }) => {
  const { _id, name, description, endDate, attendees } = activity;
  const [toggle, setToggle] = useState(false);

  const [isAttended, setIsAttended] = useState(
    loggedInUser.eventsAttended?.includes(_id) && false
  );

  const handleToggle = async (event) => {
    if (toggle === true && !isAttended) {
      try {
        const response = await axios.put(
          `http://localhost:3005/api/user/${loggedInUser._id}`,
          {
            newEventId: _id,
            eventName: name,
            attendees: attendees,
          }
        );
        setIsAttended(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      const response = await axios.delete(
        `http://localhost:3005/api/user/${loggedInUser._id}`,
        {
          newEventId: _id,
          event: name,
          attendees: attendees,
        }
      );
      setIsAttended(false);
    }
  };

  return (
    <div className="button-container">
      <button
        onClick={handleToggle}
        type="button"
        className="btn btn-outline-dark btn-sm btn-floating"
      >
        {isAttended ? "attended" : "attend"}
      </button>
    </div>
  );
};

export default AttendeeToggle;
