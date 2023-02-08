import React from "react";
import { useRef } from "react";
import "./loginForm.css";

const LoginForm = (props) => {
  const emailInputRef = useRef(); // accessing data entered in the username field
  const passwordInputRef = useRef(); // accessing data entered in the password field

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value; // storing the accessed data
    const enteredPassword = passwordInputRef.current.value; // storing the accessed data

    const userData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    props.checkUserData(userData);
  };

  return (
    <section id="loginForm">
      <div className="container form__container">
        <div className="greetings">
          Hello, <br />
          Sign in!
        </div>
        <div className="card">
          <form action="" onSubmit={submitHandler}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                ref={emailInputRef}
                required
                autoComplete="off"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                ref={passwordInputRef}
                required
                autoComplete="off"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="btn btn-primary">Log in</button>
            {props.error ? (
              <p className="error__msg">Invalid username or password</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
