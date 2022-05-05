import React from "react";
import loading from "./waiting.webp";
export const LoadingComponent = () => {
  return (
    <div>
      <img className="profile-photo" src={loading} />
    </div>
  );
};
