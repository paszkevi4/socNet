import {createSelector} from 'reselect'

//selectors

//login page
export const getCaptcha = (state) => {
    return state.auth.captchaUrl
}
export const getIsAuth = (state) => {
    return state.auth.isAuth
}
//profile page
export const getProfile = (state) => {
     return state.profilePage.profile
}
export const getStatus = (state) => {
    return state.profilePage.status
}
export const getUserId = (state) => {
    return state.auth.userId
}

//header
export const getLogin = (state) => {
    return state.auth.login
}

//users page
export const getUsers = (state) => {
    return state.usersPage.users
}
export const getUsersAmount = (state) => {
    return state.usersPage.usersAmount
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

//reselectors
export const reselector = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})
