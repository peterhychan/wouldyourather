import {GET_USERS} from "./types";

export const fetchUsers = users => {
    return {
        type: GET_USERS,
        users
    }
}
