import { Component } from "react";
import { connect } from "react-redux";
import NewNav from "./newNav";
import LoginRedirect from "./loginRedirect";
class PollRessult extends Component {
  state = {};

  render() {
    const {
      authed,
      name,
      avatarURL,
      optionOneText,
      optionTwoText,
      optionOneVotes,
      optionTwoVotes,
    } = this.props;
    const totalVotes=optionOneVotes+optionTwoVotes

    const percentage = (partialValue, totalValue) => {
      return ((100 * partialValue) / totalValue).toFixed();
    };

    console.log("Loook here" + optionOneVotes + "yet" + optionTwoVotes);
    return (
      <div>
        <NewNav />
        {authed === null ? (
          <LoginRedirect />
        ) : (
          <div className="question">
            <div className="question-info">
              <div>By {name} </div>

              <img
                className="avatar"
                src={avatarURL}
                alt={`avatar of ${name}`}
              />
            </div>
            <div>
              <h2>Would you rather...</h2>
              <div className="question">
                <div  className="question-info" htmlFor="first">{optionOneText}
                <div> {optionOneVotes} vote  {percentage(optionOneVotes,totalVotes)}%</div>

                </div>
              </div>
              <div className="question">
                <div className="question-info" htmlFor="second">{optionTwoText}
                <div  > {optionTwoVotes} vote   {percentage(optionTwoVotes,totalVotes)}%</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function MapStateToProps({ authed, getUsers, getQuestions }, props) {
  const { id } = props.match.params;

  const { author, optionOne, optionTwo } = getQuestions[id];
  const { name, avatarURL } = getUsers[author];
  const optionOneText = optionOne.text;
  const optionTwoText = optionTwo.text;
  const optionOneVotes = optionOne["votes"].length;
  const optionTwoVotes = optionTwo["votes"].length;

  return {
    id,
    name,
    avatarURL,
    optionOneText,
    optionTwoText,
    authed,
    optionOneVotes,
    optionTwoVotes,
  };
}

export default connect(MapStateToProps)(PollRessult);
