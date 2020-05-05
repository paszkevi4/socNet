import {appDidMountThunk} from "./authReducer";

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
        }

}

export const setInitializedAC = () => {
    return ({type: 'SET_INITIALIZED'})
}

export const initializeAppThunk = () => (dispatch) => {
    let promise = dispatch(appDidMountThunk())
    promise.then (() => {
        dispatch(setInitializedAC())
    })
}

export default appReducer

