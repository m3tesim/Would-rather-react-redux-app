import { Component } from "react";
import { connect } from "react-redux";
import { handleAnswer } from "../actions/answerQuestion";
import NewNav from "./newNav";
class Question extends Component {
  state = {
    selected: "optionOne",
  };
  handleChange = (e) => {
    this.setState({ selected: e.target.value });
  };

  handleVoting = (e) => {
    const qid = this.props.id;
    const authed = this.props.authed;
    const answer = this.state.selected;

    this.props.dispatch(handleAnswer({ authedUser: authed, qid, answer }));
  };
  render() {
    const { name, avatarURL, optionOneText, optionTwoText } = this.props;
    return (
      <div>
        <NewNav />

        <div className="question">
          <div className="question-info">
            <div>By {name} </div>

            <img className="avatar" src={avatarURL} alt={`avatar of ${name}`} />
          </div>
          <div>
            <h2>Would you rather...</h2>
            <div>
              <input
                type="radio"
                id="first-radio"
                name="pollQ"
                value="optionOne"
                checked
                onChange={this.handleChange}
              />
              <label htmlFor="first">{optionOneText}</label>
            </div>
            <div>
              <input
                type="radio"
                id="second-radio"
                name="pollQ"
                value="optionTwo"
                onChange={this.handleChange}
              />
              <label htmlFor="second">{optionTwoText}</label>
            </div>
            <div>
              <button className="btn" onClick={this.handleVoting}>
                Submit{" "}
              </button>
            </div>
          </div>
        </div>
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
  return {
    id,
    name,
    avatarURL,
    optionOneText,
    optionTwoText,
    authed,
  };
}

export default connect(MapStateToProps)(Question);
