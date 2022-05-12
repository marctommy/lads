import React from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, sePassword] = React.useState("");

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => sePassword(event.target.value);

  const handleSubmit = () => {
    login(email, password).then((user) => {
      console.log(user);
      props.setLoggedInUser(user);
      navigate("/");
    });
  };

  return (
    <div>
      <center>
        <div className="card login">
          <center>
            <input
              type="text"
              placeholder="Email"
              onChange={handleEmail}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              value={password}
            />
            <button type="button" onClick={handleSubmit}>
              Login
            </button>
          </center>
        </div>
      </center>
    </div>
  );
};

export default Login;
