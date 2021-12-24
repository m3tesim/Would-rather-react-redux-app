import { GET_QUESTIONS} from "../actions/getQuestions";
import { ADD_Q } from "../actions/addQuestion";
import { ANSWER_Q } from "../actions/answerQuestion";
export function getQuestions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

      case ADD_Q:
  
        return {
          ...state,
          [action.question.id]: action.question
        };

        case ANSWER_Q :
  
          return {
            ...state,
            [action.qid]:{
            ...state[action.qid],

            [action.answer]:{
              ...state[action.qid][action.answer],
             votes: [action.qid][action.answer].votes.cocat(action.author)}
          }};

    default:
      return state;
  }
}




