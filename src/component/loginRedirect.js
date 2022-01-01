import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
class LoginNavigate extends Component {


  render() {

    const { from } = this.props;

    return (
    
    <div className="header">
    <div className="dashboard">
    <h2>Would you rather app </h2>
      <h3>Please login to paly</h3>
      <Redirect to={{
            pathname: '/',
            state: {from}
        }} />

    </div>
  </div>
)

    
    
  }
}



export default LoginNavigate;


     // <Link className="btn" to='/'>Go to the login page</Link>
