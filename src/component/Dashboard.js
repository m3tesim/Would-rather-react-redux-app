import React, { Component } from "react";
import { connect } from "react-redux";
import Poll from "./poll";
export class Dashboard extends Component {
  render() {
const {authed,questionsIDS,authors}= this.props
console.log("this is "+authed)

    //const {author}= this.props.questionsIDS.author
    return (
      <div className="container">
        <ul>
            
          {
            questionsIDS.map((qID) => (
              <li key={qID}>
              <Poll id={qID} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);

function mapStateToProps({ getQuestions, authed }) {
  return {
    authed,
    authors:Object.values(getQuestions).map(value=>value.author),

    questionsIDS: Object.keys(getQuestions).sort(
      (a, b) => getQuestions[b].timestamp - getQuestions[a].timestamp
    ),
  };
}
