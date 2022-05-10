import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";

const hobbiesList = [
  { name: "Outdoor", id: 1 },
  { name: "Mindfulness", id: 2 },
  { name: "Gaming", id: 3 },
  { name: "Sports", id: 4 },
  { name: "Sports", id: 5 },
  { name: "Workout", id: 6 },
  { name: "DIY", id: 7 },
  { name: "& Children", id: 8 },
  { name: "Other", id: 9}
]

const SignUp = (props) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hobbies, setHobbies] = useState([]);
  // const [img, setImg] = React.useState("");

  const submitUserRegisteration = () => {
    signup(name, email, password, hobbies).then((user) => {
      props.setLoggedInUser(user);
      navigate("/");
    });
  };

  console.log(hobbies)

  const handleSelect = (newHobbiesList) => {
    const hobbyStrings = newHobbiesList.map(el => el.name)

    setHobbies(hobbyStrings)
  }

  const handleRemove = (newHobbiesList) => {
    const hobbyStrings = newHobbiesList.map(el => el.name)

    setHobbies(hobbyStrings)
  }

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
        displayValue="name"
        onRemove={handleRemove}
        onSelect={handleSelect}
        options={hobbiesList}
      />

      <button onClick={submitUserRegisteration}>Register</button>
    </div>
  );
};

export default SignUp;
