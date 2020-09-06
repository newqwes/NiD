const {
  default: Axios
} = require("axios");

const instance = Axios.create({
  withCredentials: true,
  headers: {
    "api-key": "54b19b92-9ee3-4a33-9f9c-d593cfe2cb47",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const userAPI = {
  getRates() {
    return Axios.get("https://www.nbrb.by/api/exrates/rates/145").then(
      (respons) => {
        return respons.data.Cur_OfficialRate;
      }
    );
  },
  getUsers(usersOnPage, currentPageUsers) {

    return instance
      .get(`users?count=${usersOnPage}&page=${currentPageUsers}`)
      .then((respons) => {
        return respons.data;
      });
  },
  deleteUserFollow(id) {
    return instance.delete(`follow/${id}`).then((respons) => {
      return respons.data;
    });
  },
  postUserFollow(id) {
    return instance.post(`follow/${id}`).then((respons) => {
      return respons.data;
    });
  },
};

export const profileAPI = {
  getOwnProfile() {
    return instance.get(`auth/me`).then((respons) => {
      return respons.data;
    });
  },
  getUserProfile(userUrlId) {
    return instance.get(`profile/` + userUrlId).then((respons) => {
      return respons.data;
    });
  },
  getUserStatus(userUrlId) {
    return instance.get(`profile/status/` + userUrlId).then((respons) => {
      return respons.data;
    });
  },
  updateUserStatus(status) {
    return instance.put(`profile/status`, {
      status
    });
  },
  changePhoto(photo) {
    const formatData = new FormData();
    formatData.append("image", photo)
    return instance.put(`profile/photo`, formatData);
  },
};

export const authAPI = {
  login(email, password, rememberMe) {
    return instance
      .post(`auth/login`, {
        email,
        password,
        rememberMe
      })
      .then((respons) => {
        return respons.data;
      });
  },
  logout() {
    return instance.delete(`auth/login`).then((respons) => {
      return respons.data;
    });
  },
};