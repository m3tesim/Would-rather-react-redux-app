import React, { Component } from "react";
import Poll from "./poll";


export class ListQuestions extends Component {
  render() {
const {questionsIDS}= this.props

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

export default ListQuestions;


