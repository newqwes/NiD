import Axios from 'axios';
import instance from './instance';

const extractData = (respons) => respons.data;

export const userAPI = {
  getRates: async () => {
    const respons = await Axios.get('https://www.nbrb.by/api/exrates/rates/145');
    const rates = respons.data.Cur_OfficialRate;

    return rates;
  },

  getUsers: async (usersOnPage, currentPageUsers) => {
    const respons = await instance.get(`users?count=${usersOnPage}&page=${currentPageUsers}`);

    return extractData(respons);
  },

  deleteUserFollow: async (id) => {
    const respons = await instance.delete(`follow/${id}`);

    return extractData(respons);
  },

  postUserFollow: async (id) => {
    const respons = await instance.post(`follow/${id}`);

    return extractData(respons);
  },
};

export const profileAPI = {
  getOwnProfile: async () => {
    const respons = await instance.get(`auth/me`);

    return extractData(respons);
  },

  getUserProfile: async (userUrlId) => {
    const respons = await instance.get(`profile/` + userUrlId);

    return extractData(respons);
  },

  getUserStatus: async (userUrlId) => {
    const respons = await instance.get(`profile/status/` + userUrlId);

    return extractData(respons);
  },

  updateUserStatus: (status) =>
    instance.put(`profile/status`, {
      status,
    }),

  changePhoto(photo) {
    const formatData = new FormData();
    formatData.append('image', photo);

    return instance.put(`profile/photo`, formatData);
  },

  changeInfo: (formData) => instance.put(`profile`, formData),
};

export const authAPI = {
  login: async (data) => {
    const respons = await instance.post(`auth/login`, data);

    return extractData(respons);
  },

  logout: async () => {
    const respons = await instance.delete(`auth/login`);

    return extractData(respons);
  },
};

export const securityAPI = {
  getCaptchaUrl: async () => {
    const respons = await instance.get('security/get-captcha-url');
    const url = respons.data.url;

    return url;
  },
};
