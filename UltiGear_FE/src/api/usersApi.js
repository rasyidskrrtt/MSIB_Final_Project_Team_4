//KODINGAN CONTOH


// import axiosInstance from "./axiosInstance"

// const login = async (email, password) => {
//     try {
//         const { data } = await axiosInstance.post('/users/login', { email, password })
//         localStorage.setItem('token', data.data.token)
//         return data
//     } catch (error) {
//         throw error
//     }
// }

// const getProfile = async () => {
//     try {
//         const { data } = await axiosInstance.get('/users/profile')
//         return data.data
//     } catch (error) {
//         throw error
//     }
// }

// const updateProfile = async (formData) => {
//     try {
//         const { data } = await axiosInstance.put('/users/profile', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
//         return data
//     } catch (error) {
//         throw error
//     }
// }

// const signOut = async () => {
//     localStorage.removeItem('token')
// }

// export const userApi = {
//     login,
//     getProfile,
//     signOut,
//     updateProfile
// }