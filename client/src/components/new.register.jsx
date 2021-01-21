import React, { useState } from "react";
import API from "../utils/API";

export const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    props.updateDisplay("");
    e.preventDefault();

    API.register(name, email, password).then((result) => {
      console.log(result);
      if (!result.data.success) {
        props.updateMessage(result.data.msg);
      } else {
        props.updateMessage({
          message: "You are now registered. Please Login",
          status: "success",
        });
        props.updateDisplay("login");
      }
    });
  };

  return (
    <div className="container">
      <form className="form-signin" onSubmit={onSubmit}>
      <h2 className="form-signin-heading">Register New Account </h2>
        <label htmlFor="inputName" class="sr-only">
          Name
        </label>
        <input
          type="text"
          className="my-control"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="inputEmail" class="sr-only">
          Email address
        </label>
        <input
          type="email"
          className="my-control"
          placeholder="Email address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="inputPassword" class="sr-only">
          Password
        </label>
        <input
          type="password"
          className="my-control"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button class="" type="submit">
          Register
        </button>
        {props.message !== "" && (
          <div className="alert alert-danger alert-dismissible" role="alert">
            {props.message.message}
          </div>
        )}
      </form>
    </div>
  );
};
