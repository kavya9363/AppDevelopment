// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice = createSlice({
//     name:"user",
//     initialState:{
//         user:null
//     },
//     reducers:{
//         login:(state,action)=>{
//             state.user=action.payload;
//         },
//         logout:(state)=>{
//             state.user=null;
//         }
//     }  
// })
// export const {login,logout}=userSlice.actions;

// export const selectUser =(state)=>state.user.user;

// export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    applications: [],
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    addApplication: (state, action) => {
      state.applications.push(action.payload);
    },
  },
});

export const { login, logout, addApplication } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectApplications = (state) => state.user.applications;

export default userSlice.reducer;
