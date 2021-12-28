import React, { Component } from "react";
import { connect } from "react-redux";
import authedUser from "../actions/authedUser";
import { Redirect } from "react-router-dom";

export class Login extends Component {
state={
    user: null,
    loggedIn: false
  }


handelLogin =(e)=>{
    const {dispatch}=this.props

    this.setState({ user: e.target.value });
    const authed= e.target.value

    dispatch(authedUser(authed));



}




  render() {
    

    const { getUsers } = this.props;

    function loginUsers(users) {

      const all = Object.keys(users).map((id) => {
        let user = users[id];
        return user;
      });

      return all;
    }

    const users = loginUsers(getUsers);

  

    if (this.state.user) {
      return <Redirect   to='/home' />
    }

    return (
      <div>
        <div>
          <h2>Would you rather app </h2>
          <h3>Choose user to login </h3>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <button >

                  <img
                    className="avatar"
                    src={user.avatarURL}
                    alt={`avatar of ${user.name}`}
                  />
                  <div>{user.name}</div>
                  <input className="btn" type="button"  onClick={this.handelLogin } value={user.id}></input>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);

function mapStateToProps({ getUsers }) {
  return {
    getUsers,
  };
}
