import React, { useState } from "react";
import { atcb_action } from "add-to-calendar-button";

const AddToCalendar = ({ activityToBeAdded }) => {
  const [event, setEvent] = useState({
    name: activityToBeAdded.name,
    description: activityToBeAdded.description,
    startDate: activityToBeAdded.date,
    endDate: activityToBeAdded,
    location: activityToBeAdded.location,
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        atcb_action({
          name: event.name,
          startDate: "2022-01-18",
          endDate: "2022-01-18",
          location: event.location,
          description: event.description,
          options: [
            "Apple",
            "Google",
            "iCal",
            "Microsoft365",
            "Outlook.com",
            "MicrosoftTeams",
            "Yahoo",
          ],
          trigger: "click",
          iCalFileName: "Reminder-Event",
        });
      }}
    >
      <input
        className="btn btn-outline-dark btn-sm btn-floating"
        onChange={setEvent}
        type="submit"
        value="Add to Calendar"
      ></input>
    </form>
  );
};
export default AddToCalendar;
