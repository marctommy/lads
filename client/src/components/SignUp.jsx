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
  { name: "Other", id: 9 },
];

const avatarList = [
  { text: "Glasses Blond", avatarId: "glassesdark" },
  { text: "Glasses Dark", avatarId: "glassesblonde" },
  { text: "Laughing", avatarId: "laughing" },
  { text: "Moustache", avatarId: "moustache" },
  { text: "Old Nerd", avatarId: "oldnerd" },
  { text: "Redhair", avatarId: "redhair" },
  { text: "Suit", avatarId: "suit" },
  { text: "Talking", avatarId: "talking" },
];

const SignUp = (props) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [avatarId, setAvatarId] = useState("");

  const submitUserRegisteration = () => {
    signup(name, email, password, hobbies, avatarId).then((user) => {
      console.log(user);
      props.setLoggedInUser(user);
      navigate("/");
    });
  };

  const handleChange = (newHobbiesList) => {
    const hobbyStrings = newHobbiesList.map((el) => el.name);

    setHobbies(hobbyStrings);
  };

  console.log(avatarId);

  // const handleChange = (newAvatar) => {
  //   const
  // }

  return (
    <div className="App card">
      <label>
        Name
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="min. 8 characters"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <label>
        Hobbies
        <Multiselect
          name="hobbies"
          displayValue="name"
          onRemove={handleChange}
          onSelect={handleChange}
          options={hobbiesList}
        />
      </label>
      <label>
        Choose an Avatar
        <sections>
          {avatarList.map((avatar) => (
            <img
              className="profile-photo"
              src={require(`./UserProfile/avatars/${avatar.avatarId}.gif`)}
              onClick={() => setAvatarId(avatar.avatarId)}
              key={avatar.avatarId}
              alt={avatar.text}
            />
          ))}
        </sections>
      </label>

      <button onClick={submitUserRegisteration}>Register</button>
    </div>
  );
};

export default SignUp;
