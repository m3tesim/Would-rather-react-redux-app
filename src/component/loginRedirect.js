import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class LoginNavigate extends Component {
  render() {
    return <Navigate to={"/"} />;
    
  }
}

export default LoginNavigate;
