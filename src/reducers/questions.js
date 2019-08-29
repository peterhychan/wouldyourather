import {ADD_QUESTION, GET_QUESTIONS} from "../actions/types"

export default function questions(state = {}, action) {
    switch (action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        default:
            return state
    }

}