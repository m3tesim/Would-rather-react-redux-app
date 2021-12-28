import React, { Component } from "react";
import {  Redirect } from "react-router-dom";
import Logintest from "./login";

class LoginNavigate extends Component {
  render() {
    return <Redirect to={"/"}  Component={Logintest}/>;
    
  }
}

export default LoginNavigate;
