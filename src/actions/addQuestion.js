export const ADD_Q ='add_q'


function addQuestion(question){
    return{
        type:ADD_Q,
        question
    }
}



export default addQuestion;