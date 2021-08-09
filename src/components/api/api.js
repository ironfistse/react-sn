import axios from 'axios';


const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '34ad0048-d0e3-4361-8839-f5809200c7fb'
  }
});


const usersApi = {
  getUsers(currentPage = 1, usersOnPage = 3) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${usersOnPage}`)
  },
  followUser(userId) {
    return axiosInstance
      .post(`follow/${userId}`)
  },
  unfollowUser(userId) {
    return axiosInstance
      .delete(`follow/${userId}`)
  },

}


export {
  usersApi,
};