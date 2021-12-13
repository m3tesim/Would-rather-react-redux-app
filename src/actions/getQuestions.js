export const GET_QUESTIONS ='get_questions'


function getQuestions(questions){
    return{
        type:GET_QUESTIONS,
        questions
    }
}



export default getQuestions;