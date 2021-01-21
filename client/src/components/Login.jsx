import React, { useState, useContext } from "react";
import API from "../utils/API";
import { MyContext } from "../Provider";
import { useHistory } from "react-router-dom";
import { Register } from "./new.register.jsx";

const Login = (props) => {
  let history = useHistory();

  let state = useContext(MyContext);

  let [password, updatePassword] = useState("");
  let [message, updateMessage] = useState("");
  let [email, updateEmail] = useState("");
  let [display, updateDisplay] = useState("login");

  const onSubmit = (e) => {
    e.preventDefault();

    API.login(email, password)
      .then((result) => {
        state.updateUser(result.data.user);
        localStorage.setItem("jwtToken", result.data.token);

        updateMessage("");

        document.getElementById("body").classList.remove("modalOpen");
        history.push("/store");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          updateMessage({
            message: "Login failed. Username or password not match",
            status: "error",
          });
        }
      });
  };
  if (display === "login") {
    return (
      <div className="login-container">
        <form className="form-signin" onSubmit={onSubmit}>
          <h2 className="form-signin-heading">Please sign in</h2>
          <div className="login-body">
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>

            <input
              type="email"
              className="my-control"
              placeholder="Email address"
              name="email"
              value={email}
              onChange={(e) => updateEmail(e.target.value)}
              required
            />
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              className="my-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
              required
            />
            {message !== "" && (
              <div
                className={
                  message.status === "error"
                    ? "alert alert-danger alert-dismissible"
                    : "alert alert-success alert-dismissible"
                }
                role="alert"
              >
                {message.message}
              </div>
            )}
            <button type="submit">Login</button>
          </div>
        </form>

        <p onClick={() => updateDisplay("register")}>
          Not a member?... <span>click here to Register</span>
        </p>
      </div>
    );
  } else {
    return (
      <Register
        updateMessage={updateMessage}
        message={message}
        updateDisplay={updateDisplay}
      />
    );
  }
};
export default Login;
