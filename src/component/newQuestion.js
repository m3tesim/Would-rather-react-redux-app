import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQ } from "../actions/addQuestion";
import NewNav from "./newNav";
import LoginRedirect from "./loginRedirect";
import { Redirect } from "react-router-dom";
export class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toDashboard:false
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
    e.preventDefault();

    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;
    dispatch(handleAddQ(optionOne, optionTwo));


    this.setState(() => ({
      OptionOne: "",
      optionTwo: "",
      toDashboard:true

    }));

    };



  render() {
    const { optionOne, optionTwo } = this.state;
    const {authed}=this.props

    if (this.state.toDashboard) {
      return <Redirect to={'/home' } />
    }
    return (
      <div>
        {authed === null ? (
          <LoginRedirect />
        ) : (
          <div>
            <NewNav />

            <div className="question  ">
              <div >
              <form onSubmit={this.handleSubmit} className="new-question">
                <span>
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
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(NewQuestion);

function mapStateToProps({ authed }) {
  return {
    authed
  };
}
