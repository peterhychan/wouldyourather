import {ADD_QUESTION, GET_QUESTIONS} from "./types";
import {saveQuestion, saveQuestionAnswer} from "../utils/api"
import {initData} from "./shared";
import {hideLoading, showLoading} from 'react-redux-loading'


export const fetchQuestions = questions => {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

export const addQuestion = question => {
    return {
        type: ADD_QUESTION,
        question
    }
}

export const handleAddQuestion = (optionOneText, optionTwoText) => {
    return (dispatch, getState) => {
        dispatch(showLoading())
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: getState().authedUser
        })
            .then(
                dispatch(initData()),
                dispatch(hideLoading())
            )
    }
}

export const handleAnswerQuestion = (qid, answer) => {
    return (dispatch, getState) => {
        dispatch(showLoading())
        return saveQuestionAnswer(getState().authedUser, qid, answer)
            .then(
                dispatch(initData()),
                dispatch(hideLoading())
            )
    }

}