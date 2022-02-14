import { extractData } from '../utils';
import instance from './instance';

export const userAPI = {
  getUsers: async (usersOnPage, currentPageUsers) => {
    const response = await instance.get(`users?count=${usersOnPage}&page=${currentPageUsers}`);

    return extractData(response);
  },

  deleteUserFollow: async id => {
    const response = await instance.delete(`follow/${id}`);

    return extractData(response);
  },

  postUserFollow: async id => {
    const response = await instance.post(`follow/${id}`);

    return extractData(response);
  },
};

export const profileAPI = {
  getOwnProfile: async () => {
    const response = await instance.get('auth/me');

    return extractData(response);
  },

  getUserProfile: async userUrlId => {
    const response = await instance.get(`profile/${userUrlId}`);

    return extractData(response);
  },

  getUserStatus: async userUrlId => {
    const response = await instance.get(`profile/status/${userUrlId}`);

    return extractData(response);
  },

  changePhoto: async photo => {
    const formatData = new FormData();
    formatData.append('image', photo);

    const response = await instance.put('profile/photo', formatData);

    return extractData(response);
  },

  updateUserStatus: async status => {
    const response = await instance.put('profile/status', { status });

    return extractData(response);
  },

  changeInfo: async formData => {
    const response = await instance.put('profile', formData);

    return extractData(response);
  },
};

export const authAPI = {
  login: async (email, password, rememberMe, captcha = null) => {
    const response = await instance.post('auth/login', {
      email,
      password,
      rememberMe,
      captcha,
    });

    return extractData(response);
  },

  logout: async () => {
    const response = await instance.delete('auth/login');

    return extractData(response);
  },
};

export const securityAPI = {
  getCaptchaUrl: async () => {
    const response = await instance.get('security/get-captcha-url');

    return extractData(response);
  },
};
