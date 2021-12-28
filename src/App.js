import { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import "./App.css";
import Dashboard from "./component/Dashboard";
import {  Switch, Route} from "react-router-dom";
import NewQuestion from "./component/newQuestion";
import LeaderBoard from "./component/leaderBoard";
import LoginTest from "./component/logintest";
import Question from "./component/questionPage";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">


            <Route  path="/" component={LoginTest} />

            <Route   path="/home" component={Dashboard} />
            <Route path="/Question/:id" component={Question} />
            <Route  path="/newquestion" component={NewQuestion} />
            <Route  path="/leaderboard" component={LeaderBoard} />
      </div>
    );
  }
}

export default connect()(App);