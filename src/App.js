import { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import "./App.css";
import Dashboard from "./component/Dashboard";
import { Route,Switch } from "react-router-dom";
import NewQuestion from "./component/newQuestion";
import LeaderBoard from "./component/leaderBoard";
import Login from "./component/login";
import Question from "./component/questionPage";
import PollResult from "./component/pollResult";
import NotFound from "./component/NotFound";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <Switch>
          
        <Route  exact path="/" component={Login} />

        <Route path="/home" component={Dashboard} />
        <Route path="/questions/:id" component={Question} />
        <Route path="/Result/:id" component={PollResult} />

        <Route path="/add" component={NewQuestion} />
        <Route path="/leaderboard" component={LeaderBoard} />
        <Route   path='*' component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
