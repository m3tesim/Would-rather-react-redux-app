import { _saveQuestionAnswer } from "../_DATA";

export const ANSWER_Q = "answer_q";
export const USER_ANSWER="user_answer"

function Answer({ authed, qid, answer }) {
  return {
    type: ANSWER_Q,

    authed,
    qid,
    answer,
  };
}

function userAnswer(authed, qid, answer) {
    return {
      type: USER_ANSWER,
      authed,
      qid,
      answer
    };
  }

export function handleAnswer(info) {
  return (dispatch) => {
    dispatch(Answer(info));
    dispatch(userAnswer(info))
    return _saveQuestionAnswer(info)
  };
}

