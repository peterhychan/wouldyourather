import {
    _getQuestions, 
    _getUsers, 
    _saveQuestion, 
    _saveQuestionAnswer
} from "./_DATA";

export const getInitialData = () => {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions
    }))

}

export const saveQuestion = question =>{
    return _saveQuestion(question)
}

export const saveQuestionAnswer = (authedUser, qid, answer) => {
    return _saveQuestionAnswer({authedUser,qid, answer})
}
