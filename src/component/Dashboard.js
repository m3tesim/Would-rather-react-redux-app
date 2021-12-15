import React, { Component } from "react";
import { connect } from "react-redux";
import Poll from "./poll";
export class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <ul>

            {this.props.questionsIDS.map((qID)=>(
                <li key={qID}> <Poll id={qID} /></li>
            ))}
            
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);

function mapStateToProps({ getQuestions }) {
  return {
    questionsIDS: Object.keys(getQuestions)
    .sort((a,b) => getQuestions[b].timestamp - getQuestions[a].timestamp)
  };
}
