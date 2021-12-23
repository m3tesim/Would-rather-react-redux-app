import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class LoginRedirect extends Component {
  render() {
    return <Redirect to={"/"} />;
  }
}

export default LoginRedirect;
