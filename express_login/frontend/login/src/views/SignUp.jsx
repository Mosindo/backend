import React from "react";
import {useState} from "react";
import axios from "axios";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
 
 const signUpSubmit= (e)=>{
  e.preventDefault();
   const userData= {
    email:email,
    password:password,
    confirmPassword:confirmPassword,
    firstName :firstName,
    surName: surName,
    dateOfBirth: dateOfBirth
   };
   console.log(userData);
  //  fetch("http://localhost:8000/signup",{
  //   method: "POST",
  //   headers: {
  //     "Accept": "application/json",
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(userData)
  //  })

   axios.post("http://localhost:8000/signup",userData)
   .then(response =>console.log(response.data))
  };
  return (
    <div>
      <div className="form-div">
        <form onSubmit={(e) => signUpSubmit(e)}>
          <input
            type="text"
            placeholder="Firstname"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className="form-control from-group"
          />
          <input
            type="text"
            placeholder="Surname"
            onChange={(e) => setSurName(e.target.value)}
            value={surName}
            className="form-control from-group"
          />
          <input
            type="text"
            placeholder="Date of birth"
            onChange={(e) => setdateOfBirth(e.target.value)}
            value={dateOfBirth}
            className="form-control from-group"
          />
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
          <input
            type="text"
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            className="form-control from-group"
          />

          <button type="submit" className="btn btn-primary btn-block">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
