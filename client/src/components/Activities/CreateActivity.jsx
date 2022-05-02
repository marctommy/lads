import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CreateActivity = () => {
  const navigate = useNavigate();

  const [newActivity, setNewActivity] = useState({
    name: "",
    description: "",
    duration: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return <div>CreateActivity</div>;
};
