import { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import './App.css';

class App extends Component{

componentDidMount(){
  this.props.dispatch(handleInitialData())

}


    render(){




        return (
            <div className="App">
              <header className="App-header">
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          );
        }
    }


    export default connect()(App)