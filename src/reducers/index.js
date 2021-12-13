import { combineReducers } from "redux";
import { authed } from "./authedUser";
import { getQuestions,addQ } from "./questions";
import getUsers from "../actions/getUsers";

export default combineReducers({
    authed,
    getQuestions,
    addQ,
    getUsers

})
