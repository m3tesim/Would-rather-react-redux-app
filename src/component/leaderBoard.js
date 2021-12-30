import React, { Component } from "react";
import { connect } from "react-redux";
import NewNav from "./newNav";
import LoginRedirect from "./loginRedirect";
export class LeaderBoard extends Component {
  render() {
    const { getUsers, authed } = this.props;
    console.log(getUsers);
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
        {authed === null ? (
          <LoginRedirect />
        ) : (
          <div>
            <NewNav />

            <div className="question">
              <ul>
                {leaders.map((user) => (
                  <li key={user.id}>
                    <div className="leader-board">
                      <div>
                        <img
                          className="avatar"
                          src={user.avatarURL}
                          alt={`avatar of ${user.name}`}
                        />
                      </div>
                      <div className="question-info">
                        <br />
                        <br></br>

                        <div>
                          <span> {user.name} </span>{" "}
                        </div>
                        <div>Created Questions: {user.questions.length}</div>
                        <div>
                          Answered Questions: {Object.keys(user.answers).length}
                        </div>

                      </div>


                      <div className="score">Score 
                      
                      <div>{user.score}</div>
                       </div>

                    </div>
                    <hr/>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(LeaderBoard);

function mapStateToProps({ getUsers, authed }) {
  return {
    getUsers,
    authed,
  };
}
