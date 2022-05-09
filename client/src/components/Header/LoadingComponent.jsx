import React from "react";
import loading from "./loading.gif";
export const LoadingComponent = () => {
  return (
    <div>
      <img className="profile-photo" alt="loading" src={loading} />
    </div>
  );
};
