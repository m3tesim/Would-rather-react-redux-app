import React, { Component } from "react";
import { connect } from "react-redux";
/*
export class Question extends Component {
    render() {
      console.log("this is the props " + this.props);
  
      const { question, authed } = this.props;
      const { timestamp, author, optionOne, optionTwo } = question;
      return (
        <div className="question">
          <div className="question-info">
            by {author}
            <form>
              <input type="radio" name="answer" value={optionOne.text} /> {" "}
              <label for="html">{optionOne.text}</label>
              <br />
              <input type="radio" name="answer" value={optionTwo.text} /> {" "}
              <label for="html">{optionTwo.text}</label>
              <br />
            </form>
            <br></br>
          </div>
        </div>
      );
    }
  }
  
  const mapStateToProps = ({ authed, getQuestions }, { id }) => {
   
  
    return {
      authed,
      question: formatQuestion({ optionOneText, optionTwoText, author }),
    };
  };
  
  export default connect(mapStateToProps)(Question);
  */