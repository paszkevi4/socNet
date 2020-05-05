import * as axios from "axios";
let apiKey1 = '64fb17f0-cb2e-44b0-bb13-ea1833967f3a'
let apiKey2 = '64fb17f0-cb2e-44b0-bb13-ea1833967f3a'
let apiKey3 = '64fb17f0-cb2e-44b0-bb13-ea1833967f3a'

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": apiKey1
    },
})

export const usersAPI = {
    getUsers(currentPage = 3, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then (response => response.data)
    },
    getProfile(userId) {
        return instance.get(`profile/` +userId)
            .then (response => response.data)
    },
    getStatus(userId) {
        return instance.get('profile/status/' +userId)
            .then (response => response.data)
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status})
            .then (response => response.data)
    },
    unfollowAPI(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    followAPI (id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    updateProfileInfo (profile) {
        return instance.put('profile', profile)
            .then(response => response.data)
    }
}

export const authAPI = {
    getMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post('/auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete('/auth/login')
            .then(response => response.data)
    },
    getCaptcha() {
        return instance.get('security/get-captcha-url')
            .then(response => response.data)
    },
}