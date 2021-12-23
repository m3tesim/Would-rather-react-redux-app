import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../_DATA";
import { handleAnswer } from "../actions/answerQuestion";
import { Navbar } from "./nav";
import LoginRedirect from "./loginRedirect";
export class Question extends Component {

state={
  selectedOption:""

}
  onValueChange=(event)=> {
    this.setState(()=>({
      selectedOption: event.target.value
    }));
  }

  submitAnswer=(event)=> {
    event.preventDefault();
    const {dispatch,question, authed}= this.props
    dispatch(handleAnswer({
      
      authed,
      qid:question.id,
      answer:this.state.selectedOption
    }))

  }



  render() {
    const { question ,user,authed} = this.props;
    const { author, optionOne, optionTwo } = question;
    const { avatarURL, name } = user;

    return (
      
      <div>

      <Navbar/>
      {authed === null ? (<LoginRedirect/>):(
      <div className="question">
      <img className="avatar" src={avatarURL} alt={`avatar of ${name}`} />

        <div className="question-info">
          by {author}

          <form  onSubmit={this.submitAnswer}>
          <header>
              <h4> Would you rather </h4>
            </header>
            <input type="radio" name="answer" value="optionOne" 
            onChange={this.onValueChange}/> 
            <label >{optionOne.text}</label>
            <br />
            <input type="radio" name="answer" value="optionTwo"
            onChange={this.onValueChange}/> 
            <label >{optionTwo.text}</label>
            <br />
            <button className="btn"> submit  </button>
          </form>
          <br></br>
        </div>
      </div>)}
      </div>
    );
  }
}

const MapStateToProps = ({ authed, getQuestions ,getUsers},props) => {
  const { id } = props.match.params;

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

export default connect(MapStateToProps)(Question);
