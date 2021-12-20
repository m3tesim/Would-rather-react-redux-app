import { GET_USERS } from "../actions/getUsers";
import { ADD_QUESTION_USER } from "../actions/getUsers";

export function getUsers(state=[], action) {
    switch (action.type) {
      case GET_USERS:
        return {
          ...state,
          ...action.users
        };
        case ADD_QUESTION_USER:

      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat(action.id)
        }}
  
      default:
        return state;
    }
  }