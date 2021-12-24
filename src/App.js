import { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import "./App.css";
import Dashboard from "./component/Dashboard";
import {  Routes, Route} from "react-router-dom";
import Question from "./component/question.js";
import NewQuestion from "./component/newQuestion";
import LeaderBoard from "./component/leaderBoard";
import LoginTest from "./component/logintest";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">


        <Routes>
            <Route  path="/" element={<LoginTest/>} />

            <Route   path="/home" element={<Dashboard/>} />
            <Route path="/Question/:id" element={<Question/>} />
            <Route  path="/newquestion" element={<NewQuestion/>} />
            <Route  path="/leaderboard" element={<LeaderBoard/>} />
        </Routes>
      </div>
    );
  }
}

export default connect()(App);