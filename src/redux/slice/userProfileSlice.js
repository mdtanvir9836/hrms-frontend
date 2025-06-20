import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../API";
const token = localStorage.getItem("token");
// console.log(token);

export const createUserProfile = createAsyncThunk(
  "userProfile/create",
  async (profileData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API}/api/profile/add`, profileData, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      // console.log(response);

      return response.data.profile;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "userProfile/get",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/api/profile/viewUserId/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      return response.data.info;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "userProfile/update",
  async ({ id, profileData }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token"); // Retrieve token dynamically
      if (!token) throw new Error("Authentication token not found");

      const response = await axios.put(
        `${API}/api/profile/update/${id}`,
        profileData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Update Response:", response.data);
      return response.data.profile; // Assuming the updated profile is returned
    } catch (error) {
      console.error("Update Profile Error:", error);
      const errorMessage =
        error.response?.data?.message || "Failed to update profile.";
      return rejectWithValue(errorMessage);
    }
  }
);


export const deleteUserProfile = createAsyncThunk(
  "userProfile/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API}/api/profile/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserProfiles = createAsyncThunk(
  'userProfiles/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/api/profile/findAll`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      return response.data.info;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);


const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    allProfiles:[],
    profiles: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create Profile
      .addCase(createUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        // state.profiles.push(action.payload);
      })
      .addCase(createUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get Profile
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profiles = [action.payload];
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update Profile
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        // state.profiles = state.profiles.map((profile) =>
        //   profile._id === action.payload._id ? action.payload : profile
        // );
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete Profile
      .addCase(deleteUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        // state.profiles = state.profiles.filter((profile) => profile._id !== action.payload);
      })
      .addCase(deleteUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserProfiles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfiles.fulfilled, (state, action) => {
        state.loading = false;
        state.allProfiles = action.payload;
      })
      .addCase(fetchUserProfiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userProfileSlice.reducer;
