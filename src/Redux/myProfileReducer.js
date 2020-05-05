import {usersAPI} from "../API/api";


let initialState = {
    myProfile: null,
    myStatus: null,
};

const myProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MY_PROFILE':
            return {
                ...state,
                myProfile: action.profile,
            }
        case 'SET_MY_STATUS':
            return {
                ...state,
                myStatus: action.status,
            }
        default:
            return state;
    }
}

export const setProfile = (profile) => ({type: 'SET_MY_PROFILE', profile})
export const setStatus = (status) => ({type: 'SET_MY_STATUS', status})

export const myProfileDidMount = () => {
    return (dispatch, getState) => {
        usersAPI.getProfile(getState().auth.userId).then(data => {
            dispatch(setProfile(data));
        })
        usersAPI.getStatus(getState().auth.userId).then(data => {
            dispatch(setStatus(data));
        })
    }
}
/*export const statusRequested = (userId) => {
    return (dispatch) => {
        usersAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data));
        })
    }
}*/
/*export const updateStatus = (status) => {
    return (dispatch) => {
        usersAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
}*/

export default myProfileReducer;