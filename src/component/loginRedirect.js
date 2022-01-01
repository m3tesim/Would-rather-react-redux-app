import React, { Component } from "react";
import {  Redirect } from "react-router-dom";
import Logintest from "./login";

class LoginNavigate extends Component {


  render() {
    alert("Please sign in to continue");

    return <Redirect to={"/"}  Component={Logintest}/>;
    
  }
}

export default LoginNavigate;
