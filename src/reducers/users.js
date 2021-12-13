import { GET_USERS } from "../actions/getUsers";

export function getUsers(state = {}, action) {
    switch (action.type) {
      case GET_USERS:
        return {
          ...state,
          ...action.users,
        };
  
      default:
        return state;
    }
  }