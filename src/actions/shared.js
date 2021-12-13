import { getInitialData } from "./../API";
import getQuestions from "./getQuestions";
import  getUsers  from "./getUsers";
import authedUser,{AUTHED_USER} from "./authedUser";


//AUTHED_USER = 'johndoe';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
       dispatch(getUsers(users));
      dispatch(getQuestions(questions));
     /// dispatch(authedUser(AUTHED_USER));
    });
  };
}
