import { Component, React } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoginRedirect from "./loginRedirect";
import NewNav from "./newNav";



class NotFound extends Component {


  render() {
    const {  authed } = this.props;


    


    return (
      <div>
     
          <div className="header">
            <div className="dashboard">
              <h1>Page not found</h1>
              <h2>404</h2>

              <Link className="btn" to='/home'>Go to the Dashboard</Link>
            </div>
          </div>
        
      </div>
    );
  }
}

export default connect(mapStateToProps)(NotFound);

function mapStateToProps({ authed}) {

  return {
    
    authed
  };
}
