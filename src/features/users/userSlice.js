import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts";

// const callLoginApi = () => {
//     return new Promise((resolve, reject) => {
        
//       setTimeout(() => {
//         if ((email === "alif@gmail.com" && password === "admin")) {
//           resolve({
//             email,
//           });
//         } else {
//           reject('Your Credential is Invalid')
//         }
//       }, 2000);
//     });
//   };

const initialState = {
  isPending: false,
  isSuccess: false,
  errorMessage: "",
  entities: [],
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (e) {
    throw e;
  }
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isPending = false;
        state.isSuccess = true;
        state.entities.push(...action.payload);
      })
      .addCase(fetchUsers.pending, (state) => {
        state.isPending = true;
        state.errorMessage = "";
        state.isSuccess = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isPending = false;
        state.isSuccess = false;
        state.errorMessage = action.error.message;
      });
  },
});

export default userSlice.reducer;
