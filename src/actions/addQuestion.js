import { _saveQuestion } from "../_DATA";
export const ADD_Q = "add_q";


function addQuestion(question) {
  return {
    type: ADD_Q,
    question,
  };
}

export default addQuestion;

export function handleAddQ(optionOneText, optionTwoText) {
  return (dispatch, getsate) => {
    const { authed } = getsate();

    return _saveQuestion({ author: authed, optionOneText, optionTwoText }).then((question)=>
    {
        dispatch(addQuestion(question));
    })
  };
}

