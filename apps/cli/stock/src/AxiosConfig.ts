import Axios from 'axios'
const AxiosInstance = Axios.create({
  baseURL: "https://jsonbox.io/box_57b738f22a9f7f092a75",
  headers: {
    'Content-Type': 'application/json',
  },

});

AxiosInstance.interceptors.request.use(
  config => {
      const token = window.localStorage.getItem('Stock');
      if (token) {
        config.headers['Authorization'] = token;
      }
      return config;
  },
  error => {
      return Promise.reject(error);
  });

AxiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
  (error) => {
    if (typeof error.response === "undefined") {
      // logOut()
    } 
    if (error.response) {
      if (error.response.status === 401) {
        // logOut()
    }
  }
    return Promise.reject(error);
  }
)

export default AxiosInstance