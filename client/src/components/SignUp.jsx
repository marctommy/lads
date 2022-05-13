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
  { text: "Glasses_Dark", avatarId: "glassesdark", id: 1 },
  { text: "Glasses_Blonde", avatarId: "glassesblonde", id: 2 },
  { text: "Laughing", avatarId: "laughing", id: 3 },
  { text: "Moustache", avatarId: "moustache", id: 4 },
  { text: "Old Nerd", avatarId: "oldnerd", id: 5 },
  { text: "Redhair", avatarId: "redhair", id: 6 },
  { text: "Suit", avatarId: "suit", id: 7 },
  { text: "Talking", avatarId: "talking", id: 8 },
];

const SignUp = (props) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [avatarId, setAvatarId] = useState("");
  const [location, setLocation] = useState("");

  const submitUserRegisteration = () => {
    signup(name, email, password, hobbies, avatarId, location).then((user) => {
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
        Location
        <input
          type="location"
          placeholder="ex. Warschauer Strasse 10"
          name="location"
          onChange={(event) => setLocation(event.target.value)}
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
        <sections>
          {" "}
          Choose an Avatar
          {avatarList.map((avatar) => (
            <img
              className="profile-photo-selection"
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
