import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../_DATA";

import { useParams } from "react-router-dom";

export class Question extends Component {
  render() {
    const { question, authed ,user} = this.props;
    const { author, optionOne, optionTwo } = question;
    const { avatarURL, name } = user;

    return (
      <div className="question">
      <img className="avatar" src={avatarURL} alt={`avatar of ${name}`} />

        <div className="question-info">
          by {author}

          <form>
          <header>
              <h4> Would you rather </h4>{" "}
            </header>
            <input type="radio" name="answer" value={optionOne.text} /> {" "}
            <label for="html">{optionOne.text}</label>
            <br />
            <input type="radio" name="answer" value={optionTwo.text} /> {" "}
            <label for="html">{optionTwo.text}</label>
            <br />
            <button className="btn"> submit  </button>
          </form>
          <br></br>
        </div>
      </div>
    );
  }
}

const MapStateToProps = ({ authed, getQuestions ,getUsers}) => {
  const params = useParams();
  const question = getQuestions[params.id];
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

export default connect(MapStateToProps)(Question);
