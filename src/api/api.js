const { default: Axios } = require("axios");

const instance = Axios.create({
    withCredentials: true,
    headers: {
        "api-key": "54b19b92-9ee3-4a33-9f9c-d593cfe2cb47"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const userAPI = {
    getRates(addNewExchangeRate) {
        return Axios.get("https://www.nbrb.by/api/exrates/rates/145").then(respons => {
            addNewExchangeRate(respons.data.Cur_OfficialRate);
        })
    },
    getUsers(usersOnPage, currentPageUsers) {
        return instance.get(`users?count=${usersOnPage}&page=${currentPageUsers}`).then(respons => {
            return respons.data
        })
    },
    getOwnProfile() {
        return instance.get(`auth/me`).then(respons => {
            return respons.data
        })
    },
    getUserProfile(userUrlId) {
        return instance.get(`profile/` + userUrlId).then(respons => {
            return respons.data
        })
    },
    deleteUserFollow(id) {
        return instance.delete(`follow/${id}`).then(respons => {
            return respons.data
        })
    },
    postUserFollow(id) {
        return instance.post(`follow/${id}`).then(respons => {
            return respons.data
        })
    }
}

