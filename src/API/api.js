import * as axios from "axios";
let apiKey1 = 'fed53842-a0be-49a9-add1-b5abc1ecc582'

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
    },
    updatePhoto(photo) {
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
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