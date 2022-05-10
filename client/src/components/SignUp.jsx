import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";

const SignUp = (props) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hobbies, setHobbies] = useState([]);

  const AddEntryClick = () => {
    setHobbies([...hobbies, `Hobbies: ${hobbies.length}`]);
  };
  const [avatarId, setAvatarId] = useState();
  const avatars = [
    { text: "Glasses Blond", avatarId: "glassesdark" },
    { text: "Glasses Dark", avatarId: "glassesblonde" },
    { text: "Laughing", avatarId: "laughing" },
    { text: "Moustache", avatarId: "moustache" },
    { text: "Old Nerd", avatarId: "oldnerd" },
    { text: "Redhair", avatarId: "redhair" },
    { text: "Suit", avatarId: "suit" },
    { text: "Talking", avatarId: "talking" },
  ];

  const submitUserRegisteration = () => {
    signup(name, email, password, hobbies).then((user) => {
      console.log(user);
      props.setLoggedInUser("user", user);
      navigate("/");
    });
  };
  return (
    <div className="App card">
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          placeholder="john@doe.com"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="*********"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      Hobbies
      <label>
        <Multiselect
          name="hobbies"
          value={setHobbies}
          isObject={false}
          options={[
            "Outdoor",
            "Mindfulness",
            "Gaming",
            "Sports",
            "Workout",
            "DIY",
            "& Children",
            "Other",
          ]}
          onRemove={{}}
          onClick={(event) => {
            console.log("event", event);
            AddEntryClick(event.target.value);
          }}
        />
      </label>
      <label>
        Choose an Avatar
        <sections>
          {avatars.map((avatar) => (
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
