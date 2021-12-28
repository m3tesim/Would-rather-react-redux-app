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
          const { qid, authed, answer } = action
          const selected = answer === 'optionOne' ? 'optionOne': 'optionTwo'
          return {
            ...state,
            [qid]: {
              ...state[qid],
              [selected]: {
                ...state[qid][selected],
                votes: state[qid][selected].votes.concat([authed])
              }
            }
          }
    default:
      return state;
  }
}




