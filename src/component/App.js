import { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import "../App.css";
import Dashboard from "./Dashboard";
import { Route, Routes } from 'react-router-dom';

import Navbar from "./nav"
import Question from "./question.js"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
 
  

  render() {
    return (
      <div className="App">
        <Navbar/>
                   <Routes>
                  <Route exact path='/home' element={<Dashboard/>} />
                  <Route path='/Question/:id' element={<Question  />} />
                </Routes>
      </div>
    );
  }
}

export default connect()(App);
