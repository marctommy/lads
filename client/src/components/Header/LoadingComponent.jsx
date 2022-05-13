import React from "react";
import loading from "./loading.gif";
export const LoadingComponent = () => {
  return (
    <div>
      <center>
        <img className="loading-component" alt="loading" src={loading} />
      </center>
    </div>
  );
};
