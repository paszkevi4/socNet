import {authAPI} from "../API/api";
import {stopSubmit} from 'redux-form'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                ...action.data,
            }
        case 'SET_CAPTCHA':
            return {
                ...state,
                ...action,
            }
        default:
            return state;
    }
}

export const setUser = (userId, email, login, isAuth) => ({ type: 'SET_USER', data: {userId, email, login, isAuth} })

export const setCaptchaAC = (captchaUrl) => ({type: 'SET_CAPTCHA', captchaUrl})

export const appDidMountThunk = () => {
   return (dispatch) => {
        return authAPI.getMe()
            .then (data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch (setUser(id, email, login, true));
            }
        })
    }
}

export const loggedInThunk = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe, captcha)
            .then (data => {
                if (data.resultCode === 0) {
                    dispatch(appDidMountThunk())
                } else if (data.resultCode === 10) {
                    dispatch(getCaptchaThunk())
                } else {
                    let message = data.messages.length > 0 ? data.messages[0] : 'email or password is wrong';
                    dispatch(stopSubmit('login', {_error: message }));
                }
        })
    }
}

export const loggedOutThunk = () => {
    return (dispatch) => {
        authAPI.logout()
            .then (data => {
                if (data.resultCode === 0) {
                    dispatch(setUser(null, null, null, false))
                }
        })
    }
}

export const getCaptchaThunk = () => {
    return (dispatch) => {
        authAPI.getCaptcha()
            .then (data => {
                dispatch(setCaptchaAC(data.url))
            })
    }
}

export default authReducer;