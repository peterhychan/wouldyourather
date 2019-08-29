import {LOGIN, LOGOUT} from "../actions/types";

export default function authedUser(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return action.id
        case LOGOUT:
            return null
        default:
            return state
    }

}