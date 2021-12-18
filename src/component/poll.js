import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../_DATA";
import { Link } from 'react-router-dom';

export class Poll extends Component {


  render() {
    const { question, authed, user , id } = this.props;

    const { author, optionOne } = question;
    const { avatarURL, name } = user;

    return authed !== author ? (
      <div className="question">
        <img className="avatar" src={avatarURL} alt={`avatar of ${name}`} />
        <div className="question-info">
          by {author}
          <form>
            <header>
              <h4> Would you rather </h4>{" "}
            </header>
            <label>{optionOne.text},,,</label>
            <br />
            <br />
            <Link className="btn"   to={`/Question/${id}`} > View poll </Link>
          </form>
          <br></br>
        </div>
      </div>
    ) : (
      ""
    );
  }
}

const mapStateToProps = ({ authed, getQuestions, getUsers }, { id }) => {
  const question = getQuestions[id];
  const author = question.author;
  const optionOneText = question.optionOne.text;
  const optionTwoText = question.optionTwo.text;
  const user = getUsers[author];

  return {
    user,
    authed,
    question: formatQuestion({ optionOneText, optionTwoText, author }),
  };
};

export default connect(mapStateToProps)(Poll);
