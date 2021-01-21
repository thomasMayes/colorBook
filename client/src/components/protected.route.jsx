import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { MyContext } from "../Provider";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  let state = useContext(MyContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (state.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: props.location,
              }}
            />
          );
        }
      }}
    />
  );
};
