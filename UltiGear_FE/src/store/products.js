//KODINGAN CONTOH


// import { create } from "zustand";
// import { taskApi } from "../api/taskApi";

// const useTaskStore = create((set) => ({
//     tasks: [],
//     fetchTasks: async () => {
//         try {
//             const data = await taskApi.getTasks()
//             set({ tasks: data })
//         } catch (error) {
//             console.log(error);
//             throw error
//         }
//     }
// }))

// // SPREAD OPERATOR
// // SPREAD ARRAY
// // a: [1,2] newValue: 3
// // b: [...a, newValue] => [1,2,3] (TAPI INI ARRAY BARU)

// // a: [1,2]
// // a.push(3)
// // a: [1,2,3] (TAPI INI BUKAN ARRAY BARU)

// // SPREAD OBJECT
// // a: { nama: "indra", kelas: "b" }
// // { ...a, tinggi: 175cm }
// // b: { nama: "indra", kelas: "b", tinggi: 175cm }

// export default useTaskStore