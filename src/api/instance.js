import Axios from 'axios';

const instance = Axios.create({
  withCredentials: true,
  headers: {
    'api-key': 'adc0e4ba-b848-4868-9725-a0aa3f343c7c',
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export default instance;
