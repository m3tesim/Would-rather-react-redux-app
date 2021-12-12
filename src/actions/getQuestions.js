export const GET_QUESTION ='get_question'


function getQuestions(questions){
    return{
        type:GET_QUESTION,
        questions
    }
}



export default getQuestions;