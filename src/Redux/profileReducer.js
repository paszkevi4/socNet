import {usersAPI} from "../API/api";


let initialState = {
    postsData: [
        {name: 'John', text: 'Its my first post!', likes: 25,},
        {name: 'Ann', text: 'Its a great weather today', likes: 12,},
        {name: 'Drew', text: 'Yo!', likes: 17,},
    ],
/*    newPostText: '',*/
    profile: null,
    status: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                name: action.name,
                text: action.newText,
                likes: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            }
        case 'DELETE_POST':
            return {
                ...state,
                postsData: state.postsData.pop
            }
            /*state.postsData.push(newPost);*/
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText,
            }
        case 'SET_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (name, newText) => ({ type: 'ADD-POST', name, newText })
export const deletePostAC = () => ({type: 'DELETE_POST'})
/*export const updateNewPostTextActionCreator = (newText) =>
    ({ type: 'UPDATE-NEW-POST-TEXT', newText })*/
export const setProfile = (profile) => ({type: 'SET_PROFILE', profile})
export const setStatus = (status) => ({type: 'SET_STATUS', status})

export const profileDidMount = (userId) => {
    return (dispatch, getState) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setProfile(data));
        })
    }
}
export const statusRequested = (userId) => {
    return (dispatch) => {
        usersAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data));
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        usersAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
}

export const updateProfileInfoThunk = (profile) => (dispatch, getState) => {
    usersAPI.updateProfileInfo(profile).then(data => {
        if (data.resultCode === 0) {
            dispatch(profileDidMount(getState().auth.userId))
        }
    })
}

export default profileReducer;