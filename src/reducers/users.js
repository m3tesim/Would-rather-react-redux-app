import { GET_USERS } from "../actions/getUsers";
import { ADD_QUESTION_USER } from "../actions/getUsers";
import { USER_ANSWER } from "../actions/answerQuestion";
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
  
        case USER_ANSWER:
          const { authed, qid, answer } = action;
    
          return {
            ...state,
            [authed]: {
              ...state[authed],
              answers: {
                ...state[authed].answers,
                [qid]: answer
              }
            }
          };
      default:
        return state;
    }
  }