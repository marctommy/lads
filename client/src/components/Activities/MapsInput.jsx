import React from "react";
import Autocomplete from "react-google-autocomplete";

const MapsInput = () => {
  return (
    <div>
      <Autocomplete
        apiKey={process.env.REACT_APP_API_GMAPS}
        onPlaceSelected={(place) => {
          console.log(place);
        }}
      />
      ;
    </div>
  );
};

export default MapsInput;
