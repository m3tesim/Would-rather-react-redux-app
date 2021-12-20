import { _saveQuestionAnswer } from '../_DATA'

export const ANSWER_Q="answer_q"


export function Answer({qid,authed , answer}) {

    return{
 type: ANSWER_Q,
 qid, 
 authed,
 answer
    
}}





export function handleAnswer (qid,answer){
    return (dispatch,getState)=>{
        const {authed}=getState()

        return _saveQuestionAnswer({
            authed,
            qid,
            answer
        }).then(() => {
            dispatch(answer({authed, qid, answer}))  ;
        })
        
    }}
