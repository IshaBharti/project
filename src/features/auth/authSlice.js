import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerApi, getUserData, login } from "./auth";

// Register Data
const initialState = {
  user: null,
  status: "idle",
  // isLoading: false,

};
// REGISTER
export const registerAsync = createAsyncThunk("auth/signup", async (data) => {
  const responses = await registerApi(data.postData);
  if (responses.data?.success == "1") {
    localStorage.setItem('dataKey', JSON.stringify(data));
    data.history.push('/dashboard')
  }
  return responses.data
})
// LOGIN

export const loginAsync = createAsyncThunk("auth/login", async (data) => {
  console.log("isha", data)
  const responses = await login(data.postData);
  return responses.data

})



// Get User Data
export const getUserDataAsync = createAsyncThunk("auth/getUserData", async () => {
  const responses = await getUserData();
  if (responses) {
    console.log(responses, "RES")

  }
  return responses

})

export const authSlice = createSlice({
  name: "auth",
  initialState,

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (state) => {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    state.user = null;
    state.status = "idle";


  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserDataAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })
      .addCase(loginAsync.pending, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })
  }

})
export const user = (state) => state.auth.user;
export const selectAuth = (state) => state.auth.user;


export default authSlice.reducer;
