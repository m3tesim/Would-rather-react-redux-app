export const AUTHED_USER='authed_user'


function authedUser(id){
    return{
        type:AUTHED_USER,
        id
    }

 

}

export default authedUser;