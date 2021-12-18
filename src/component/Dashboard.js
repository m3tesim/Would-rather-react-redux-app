import { Component ,React} from "react";
import ListQuestions from "./listQuestions";
import { connect } from "react-redux";

class Dashboard extends Component {
  
    
  state = {
    value: true,
  };
  


  showAnswered=()=>{
    this.setState({
      value:true
    })
    }
showUnAnswered=()=>{
  this.setState({
    value:false
  })

  
}


  

  render() {
    const {questionsIDS,user}= this.props


    const answeredIds = user ? Object.keys(user['answers']) : [];

    function getUnanswered(questionIds, answeredIds) {
      return questionIds
        .filter(questionId => !(answeredIds.includes(questionId)));
    }

     const unansweredIds = user ? getUnanswered(questionsIDS, answeredIds) : [];





    return (
        <div className="header">


          <button  onClick={this.showAnswered} className="head btn ">UnAnswered</button>
          <button  onClick={this.showUnAnswered} className="head btn">Answered</button>
          {this.state.value===true? 
          <ListQuestions questionsIDS={unansweredIds} />:<ListQuestions questionsIDS={answeredIds} />}
         
        </div>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);



function mapStateToProps({ getQuestions, authed ,getUsers }) {
  const user = getUsers[authed];


    return {
      authed,
      user,

  
      questionsIDS: Object.keys(getQuestions).sort(
        (a, b) => getQuestions[b].timestamp - getQuestions[a].timestamp
      ),
    };
  }