import Axios from 'axios';

const instance = Axios.create({
  withCredentials: true,
  headers: {
    'api-key': 'fa681ade-6815-4f8e-ba9c-b16a714d0eb1',
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export default instance;
