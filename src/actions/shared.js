import { getInitialData } from "./../API";
import getQuestions from "./getQuestions";
import getUsers from "./getUsers";


export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}
