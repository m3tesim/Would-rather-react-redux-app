import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../_DATA";
import { Link } from "react-router-dom";

export class Poll extends Component {
  render() {
    const { authedUser, question, user, id } = this.props;

    const { author, optionOne } = question;
    const { avatarURL, name } = user;

    return (
      <div className="poll">
          <img
            className="avatar img-poll"
            src={avatarURL}
            alt={`avatar of ${name}`}
          />

          <div className="question-info">
            by {author}
            <form>
              <header>
                <h4> Would you rather </h4>
              </header>
              <label>{optionOne.text},,,</label>
              <br />
              <br />
              {Object.keys(authedUser.answers).includes(id) ? (
                <Link className="btn" to={`/Result/${id}`}>
                  View poll
                </Link>
              ) : (
                <Link className="btn" to={`/questions/${id}`}>
                  View poll
                </Link>
              )}
            </form>
            <br></br>
          </div>
      </div>
    );
  }
}

function mapStateToProps ({ authed, getQuestions, getUsers }, { id }) {
  const question = getQuestions[id];
  const author = question.author;
  const optionOneText = question.optionOne.text;
  const optionTwoText = question.optionTwo.text;
  const user = getUsers[author];
  const authedUser = getUsers[authed];
  return {
    id,
    user,
    authedUser,
    question: formatQuestion({ optionOneText, optionTwoText, author }),
  };
};

export default connect(mapStateToProps)(Poll);
