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
  <div>
      <p>loginSubmit</p>
  </div>
  
  )
}

export default Login;
