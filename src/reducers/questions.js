import { GET_QUESTIONS} from "../actions/getQuestions";
import { ADD_Q } from "../actions/addQuestion";

export function getQuestions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    default:
      return state;
  }
}



export function addQ(state = {}, action) {
    switch (action.type) {
      case ADD_Q:
        return {
          ...state,
          ...action.question,
        };
  
      default:
        return state;
    }}
