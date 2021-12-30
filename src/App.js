import { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import "./App.css";
import Dashboard from "./component/Dashboard";
import { Route } from "react-router-dom";
import NewQuestion from "./component/newQuestion";
import LeaderBoard from "./component/leaderBoard";
import Login from "./component/login";
import Question from "./component/questionPage";
import PollResult from "./component/pollResult";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <Route  exact path="/" component={Login} />

        <Route path="/home" component={Dashboard} />
        <Route path="/Question/:id" component={Question} />
        <Route path="/Result/:id" component={PollResult} />

        <Route path="/newquestion" component={NewQuestion} />
        <Route path="/leaderboard" component={LeaderBoard} />
      </div>
    );
  }
}

export default connect()(App);
