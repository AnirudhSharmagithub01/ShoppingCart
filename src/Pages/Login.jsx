import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
  return (
    <div className=" max-w-[400px] h-auto flex flex-col justify-between items-center mx-auto mt-16 rounded-md mb-[131px] bg-black">
      <form className=" text-white py-5 px-8 border-none border-black">
        <h1 className="text-3xl font-bold mb-5">LogIn</h1>
        <div className="flex flex-col mt-4 gap-6 ">
          <input
            type="email"
            required="*"
            placeholder="Email address*"
            className="bg-transparent border-white
        rounded-md w-[350px] p-3 text-white border-double border-2"
          />
          <input
            type="password"
            required="*"
            placeholder="Password*"
            className="bg-transparent border-white
        rounded-md w-[350px] p-3 text-white border-double border-2"
          />
          <Link to="/google">
            <p className='text-xs mt-1 text-blue-200 ml-auto max-w-max'>
                Forgot Password
            </p>
        </Link>
          <Link to={"/login"}>
            <button
              className="bg-red-600 w-[350px] border-none rounded-md
          text-xl h-12 font-bold flex  items-center justify-center gap-2 p-2"
            >
              LogIn
            </button>
          </Link>
          <Link to={"/google"}>
            <button
              className="bg-red-600 w-[350px] border-none rounded-md
          text-xl h-12 font-bold flex  items-center justify-center gap-2 p-2"
            >
              LogIn with Google
              <FcGoogle/>
            </button>
          </Link>
          <div className=" cursor-pointer">
            <h3 className=" font-light">
              New to create account ? {"  "}
              <Link to="/signup" className="font-semibold">
                SignUp 
              </Link>
            </h3>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
































/*

import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;


*/