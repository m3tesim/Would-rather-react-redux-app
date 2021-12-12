export const GET_USERS ='get_users'


function getUsers(users){
    return{
        type:GET_USERS,
        users
    }
}



export default getUsers;