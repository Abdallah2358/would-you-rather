export const RECEIVE_USERS = 'RECEIVE_USERS'

//receive USER action creator 
export function receiveUsers(users) {
    return {
        type : RECEIVE_USERS
        , users
    }
}