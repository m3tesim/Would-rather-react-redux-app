import { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import "../App.css";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Question from "./question.js"
import NewQuestion from "./newQuestion";
import LeaderBoard from "./leaderBoard";
import  LoginTest  from "./logintest";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
 
  

  render() {
    return (
      <div className="App">
        
                   <Router>
                     <Switch>
                  <Route exact  path='/' component={LoginTest} />

                  <Route exact path='/home' component={Dashboard} />
                  <Route path='/Question/:id' component={Question  } />
                  <Route exact path='/newquestion' component={NewQuestion} />
                  <Route exact path='/leaderboard' component={LeaderBoard} />
                  </Switch>

                </Router>
      </div>
    );
  }
}

export default connect()(App);
