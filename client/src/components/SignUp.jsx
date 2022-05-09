import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";

const SignUp = (props) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hobbies, setHobbies] = useState([
    "Outdoor",
    "Mindfulness",
    "Gaming",
    "Sports",
    "Workout",
    "DIY",
    "& Children",
    "Other",
  ]);
  // const [img, setImg] = React.useState("");

  const submitUserRegisteration = () => {
    signup(name, email, password, hobbies).then((user) => {
      props.setLoggedInUser(user);
      navigate("/");
    });
  };
  return (
    <div className="App card">
      <input
        type="text"
        placeholder="John"
        name="name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="john@doe.com"
        name="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="*********"
        name="password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <Multiselect
        name="hobbies"
        onRemove={{}}
        onSelect={setHobbies}
        options={hobbies}
      />

      <button onClick={submitUserRegisteration}>Register</button>
    </div>
  );
};

export default SignUp;
