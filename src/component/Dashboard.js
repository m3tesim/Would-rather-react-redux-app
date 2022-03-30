import { Component, React } from "react";
import ListQuestions from "./listQuestions";
import { connect } from "react-redux";
import LoginRedirect from "./loginRedirect";
import NewNav from "./newNav";
class Dashboard extends Component {
  state = {
    value: true,
  };

  showAnswers = () => {
    this.setState({
      value: !this.state.value
    });
  };
 

  render() {



    const { getQuestions, questionsIDS, user, authed } = this.props;
    if (authed === null ){return <LoginRedirect from='/home'/>}


    const answeredIds =  Object.keys(user["answers"]).sort(
      (a, b) => getQuestions[b].timestamp - getQuestions[a].timestamp ) ;
 

    function getUnanswered(questionIds, answeredIds) {
      return questionIds.filter(
        (questionId) => !answeredIds.includes(questionId)

      )  

      ;
    }

    const unansweredIds = user ? getUnanswered(questionsIDS, answeredIds) : [];



    return (
      <div>
          
          <div className="header">
            <NewNav />

            <div className="dashboard">
              <div className="center"  id="question-tab">
              <button onClick={this.showAnswers} className={`tab  ${this.state.value===true && "active"}  `} >
                UnAnswered Questions
              </button>
              <button onClick={this.showAnswers} className={`tab  ${this.state.value===false && "active"}  `}>
                Answered Questions
              </button>
              </div>
              {this.state.value === true ? (
                <ListQuestions questionsIDS={unansweredIds} />
              ) : (
                <ListQuestions questionsIDS={answeredIds} />
              )}
            </div>
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);

function mapStateToProps({ getQuestions, authed, getUsers }) {
  const user = getUsers[authed];

  return {
    authed,
    user,
    getQuestions,

    questionsIDS: Object.keys(getQuestions).sort(
      (a, b) => getQuestions[b].timestamp - getQuestions[a].timestamp
    ),
  };
}
