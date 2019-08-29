import {LOGIN, LOGOUT} from "./types";

export const login = id => {
    return {
        type: LOGIN,
        id
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}