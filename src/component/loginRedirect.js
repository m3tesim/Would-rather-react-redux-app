import React, { Component } from "react";
import {  Redirect } from "react-router-dom";

class LoginNavigate extends Component {
  render() {
    return <Redirect to={"/"} />;
    
  }
}

export default LoginNavigate;
