import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../API";

const token = localStorage.getItem('token');
const initialState = {
  allUser:[],
  users: [],
  loading: false,
  error: null,
};

// Async thunk for adding a user
export const addUserAsync = createAsyncThunk(
  "user/addUserAsync",
  async (userData, { rejectWithValue }) => {
    // console.log(userData);
    
    try {
      const response = await axios.post(`${API}/user/add-user`, userData);
      // console.log(response);
      if (response.data.user._id) {
        localStorage.setItem("userId", response.data.user._id);
      }
      return response.data; // Assuming the API returns the added user
    } catch (error) {
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);
export const updateUserAsync = createAsyncThunk(
  "user/updateUserAsync",
  async ({ userId, userData }, { rejectWithValue }) => {
    console.log( userId, userData );

    try {
      const response = await axios.put(
        `${API}/user/update-user/${userId}`,
        userData
      );
      console.log(response);

      return response.data.user; // Assuming "user" contains updated user details
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error updating user");
    }
  }
);

export const fetchUserById = createAsyncThunk(
  "user/fetchById",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/user/view-user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header 
        },
      });
      return response.data; // Return the user data
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching user");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API}/user/loginuser`, credentials);
      console.log(response);
      
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({
        error: "NETWORK_ERROR",
        message: "Network error occurred.",
      });
    }
  }
);

export const fetchUsers = createAsyncThunk('users/fetchAll', async () => {
  try {
    const response = await axios.get(`${API}/user/viewall-user`, {
      headers: {
        Authorization: `Bearer ${token}`, // Attach the token to the Authorization header 
      }}); // Adjust the URL as necessary
    return response.data; // Assuming the backend returns the users array
  } catch (error) {
    throw new Error(error.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        // state.users.push(action.payload);
      })
      .addCase(addUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        // state.users = action.payload;
      })
      .addCase(updateUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.allUser = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }) 
  },
});

export default userSlice.reducer;
