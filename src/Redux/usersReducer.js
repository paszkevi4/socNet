import {usersAPI, moviesAPI} from "../API/api";

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    usersAmount: 0,
    isFetching: false,
};

const usersReduser = (state = initialState, action) => {

    switch (action.type) {
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map ( u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false}
                    }
                    return u;
                })
            }
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map ( u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true}
                    }
                    return u;
                })
            }
        case 'SET_USERS':
            return {
                ...state,
                users: [ ...action.users ]
            }
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.currentPage }
        case 'SET_USERS_AMOUNT':
            return { ...state, usersAmount: action.totalCount }
        case 'TOGGLE_FETCHING':
            return { ...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: 'FOLLOW', id: userId})
export const unfollowAC = (userId) => ({type: 'UNFOLLOW', id: userId})
export const setUsers = (users) => ({type: 'SET_USERS', users})
export const setCurrentPage = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage})
export const setUsersAmount = (totalCount) => ({type: 'SET_USERS_AMOUNT', totalCount})
export const toggleFetching = (isFetching) => ({type: 'TOGGLE_FETCHING', isFetching})

export const usersPageContainerDidMount = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch (toggleFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then (data => {
            dispatch (toggleFetching(false) );
            dispatch (setUsers (data.items) );
            dispatch (setUsersAmount (data.totalCount) );
        })
    }
}
export const usersPageContainerHasBeenChanged = (p, pageSize) => {
    return (dispatch) => {
        dispatch (toggleFetching(true) )
        dispatch (setCurrentPage(p) )
        usersAPI.getUsers(p, pageSize).then (data => {
            dispatch (toggleFetching(false) )
            dispatch (setUsers(data.items) )
        })
    }
}
export const follow = (uId) => {
    return (dispatch) => {
        usersAPI.followAPI(uId)
            .then (data => {
                if (data.resultCode == 0) {
                    dispatch (followAC(uId) )
                }
            })
    }
}
export const unfollow = (uId) => {
    return (dispatch) => {
        usersAPI.unfollowAPI(uId)
            .then (data => {
                if (data.resultCode == 0) {
                    dispatch (unfollowAC(uId) )
                }
            })
    }
}

export default usersReduser;

