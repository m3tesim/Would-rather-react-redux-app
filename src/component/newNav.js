import { Component, React } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import authedUser from "../actions/authedUser";
class NewNav extends Component {
  signOut = () => {
    const { dispatch } = this.props;
    dispatch(authedUser(null));
  };

  render() {
    const { authed } = this.props;
    console.log("this is the aother from dashboar   " + authed);

    const { avatarURL, name } = this.props;

    return (
      <div className="nav-bar">
        <ul className="nav-items">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/newQuestion">New Question</NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </li>

          <li>
            <NavLink to="/" onClick={this.signOut}>
              sign out
            </NavLink>
          </li>
          <li className="user-avatar">
            <img
              className="nav-img"
              src={avatarURL}
              alt={`avatar of ${name}`}
            />
            <span> {name}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NewNav);

function mapStateToProps({ authed, getUsers }) {
  const user = getUsers[authed];

  return {
    name: user["name"],
    avatarURL: user["avatarURL"],
  };
}
