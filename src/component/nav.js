import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
  render() {

    const { avatarURL, name  } = this.props;


    return (
      <div className="nav-bar">
        <ul className="nav-items"  >
          <li >
            <NavLink to='/home' >
              Home
            </NavLink>
          </li>
          <li >
            <NavLink to='/newQuestion' >
              New Question
            </NavLink>
          </li>
          <li >
            <NavLink to='/leaderboard' >
              Leaderboard
            </NavLink>
          </li>
         
          <li >
            <NavLink to='/' exact="true"  onClick={this.signOut}>
              sign out
            </NavLink>
          </li>
          <li className='user-avatar' >
          <img className="nav-img" src={avatarURL} alt={`avatar of ${name}`} />
          <span> {name}</span>

          </li>
         
    
      
        </ul>
      </div>
    );
  }
}




const mapStateToProps = ({ authed,  getUsers }) => {
    const user = getUsers[authed];
  
    return {
        name: user ? user['name'] : '',
        avatarURL: user ? user['avatarURL'] : ''
    };
  };

  export default connect(mapStateToProps)(Navbar);
