import { _saveQuestion } from "../_DATA";
import { addQuestionToUser } from "./getUsers";

export const ADD_Q = "add_q";
function addQuestion(question) {
  return {
    type: ADD_Q,
    question,
  };
}

export function handleAddQ(optionOneText, optionTwoText) {
  return (dispatch, getsate) => {
    const { authed } = getsate();
    return _saveQuestion({
      author: authed,
      optionOneText,
      optionTwoText,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addQuestionToUser(question));

    });
  };
}
