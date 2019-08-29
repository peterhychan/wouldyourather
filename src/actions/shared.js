import {hideLoading, showLoading} from 'react-redux-loading'
import {getInitialData} from "../utils/api"
import {fetchUsers} from "./users";
import {fetchQuestions} from "./questions";


export const initData = () => {
    return dispatch => {
        dispatch(showLoading())
        return getInitialData()
        	.then(({users, questions}) => {
	            dispatch(fetchUsers(users))
	            dispatch(fetchQuestions(questions))
	            dispatch(hideLoading())
        })
    }

}