export const GET_USERS ='get_users'
export const ADD_QUESTION_USER = 'add_question_user';


function users(users){
    return{
        type:GET_USERS,
        users
    }
}



export default users;




export function addQuestionToUser({ id, author }) {
  return {
    type: ADD_QUESTION_USER,
    id,
    author
  };
}