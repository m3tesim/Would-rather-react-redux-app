export const GET_USERS ='get_users'


function users(users){
    return{
        type:GET_USERS,
        users
    }
}



export default users;