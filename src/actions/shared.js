import { getInitialData } from "./../API";
import getQuestions from "./getQuestions";
import getUsers from "./getUsers";
import authedUser from "./authedUser";

const AUTHED_ID = "";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      dispatch(authedUser(AUTHED_ID));
    });
  };
}
