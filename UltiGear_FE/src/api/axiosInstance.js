//KODINGAN CONTOH


// import axios from "axios";

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:2828/api'
// })

// // Add a request interceptor
// axiosInstance.interceptors.request.use(function (config) {
//     // Do something before request is sent

//     const token = localStorage.getItem('token')

//     if(token) {
//         config.headers['Authorization'] = `Bearer ${token}`
//     }

//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// // Add a response interceptor
// axiosInstance.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data

//     return response;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error

//     if(error.response && error.response.status === 401) {
//         localStorage.removeItem('token')
//     }


//     return Promise.reject(error);
//   });

// //? FE -> (interceptor request) -> REQUEST -> BE
// //? BE -> RESPONSE -> (interceptor response) -> FE


// export default axiosInstance
