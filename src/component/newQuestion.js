import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQ } from "../actions/addQuestion";

export class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleChange1 = (e) => {
    const option = e.target.value;

    this.setState(() => ({
      optionOne: option,
    }));
  };

  handleChange2 = (e) => {
    const option = e.target.value;

    this.setState(() => ({
      optionTwo: option,
    }));


  };

  handleSubmit = (e) => {
      e.preventDefault()
      
    const { optionOne, optionTwo } = this.state;
    const {dispatch}=this.props
    dispatch(handleAddQ(optionOne, optionTwo))

    // add question to the state


    this.setState(() => ({
      OptionOne: "",
      optionTwo: "",
    }));
  };

  render() {

    const { optionOne, optionTwo } = this.state;


    return (
      <div className="question ">
        <form onSubmit={this.handleSubmit} className="question-info ">
          <span>
            {" "}
            <h2> Create New Question </h2>
          </span>

          <h3>Would You Rather </h3>
          <input
            type="text"
            value={optionOne}

            placeholder="option One"
            onChange={this.handleChange1}
            maxLength="50"
          />
          <h3>OR</h3>
          <input
            type="text"
            value={optionTwo}
            placeholder="option Tow"
            onChange={this.handleChange2}

            maxLength="50"
          />

          <button
            className="btn"
            type="submit"
            disabled={(optionOne && optionTwo) === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
