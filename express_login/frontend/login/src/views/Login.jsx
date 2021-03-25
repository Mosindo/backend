import React from "react";
import {useState} from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    console.log(userData);
    axios
      .post("http://localhost:8000/login", userData)
      .then((response) => console.log(response.data));
  };

  return (
    <div className="form-div">
    <form onSubmit={(e) => loginSubmit(e)}>
      <input
        type="text"
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="form-control from-group"
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="form-control from-group"
      />

      <button type="submit" className="btn btn-primary btn-block">
        Login
      </button>
    </form>
  </div>
  
  )
}

export default Login;
