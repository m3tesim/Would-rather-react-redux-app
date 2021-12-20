import { combineReducers } from "redux";
import { authed } from "./authedUser";
import { getQuestions} from "./questions";
import { getUsers } from "./users";
export default combineReducers({
    authed,
    getUsers,
    getQuestions,
    
    

})
