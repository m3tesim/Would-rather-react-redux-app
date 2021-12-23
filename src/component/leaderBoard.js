import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar } from "./nav";
import LoginRedirect from "./loginRedirect";
export class LeaderBoard extends Component {
  render() {
    const { getUsers,authed } = this.props;
console.log(getUsers)
    function score(users) {
      const usersScore = Object.keys(users).map((id) => {
        let user = users[id];
        user["score"] =
          Object.keys(user["answers"]).length + user["questions"].length;
        return user;
      });

      return usersScore.sort((a, b) => b.score - a.score);
    }

    const leaders = score(getUsers);

    return (

      <div>

      <Navbar/>
      {authed === null ? (<LoginRedirect/>):(
      <div className="question">
        <ul>
          {leaders.map((user) => (
            <li key={user.id}>
              <img
                className="avatar"
                src={user.avatarURL}
                alt={`avatar of ${user.name}`}
              />
              <div className="question-info">
                {user.name}
                <div>Created Questions: {user.questions.length}</div>
                <div>
                  Answered Questions: {Object.keys(user.answers).length}
                </div>

                <div>Score : {user.score}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>)}
      </div>
      
    );
  }
}

export default connect(mapStateToProps)(LeaderBoard);

function mapStateToProps({ getUsers,authed }) {
  return {
    getUsers,
  };
}
