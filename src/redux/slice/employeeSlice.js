import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../API';

// Async thunks for API operations
const token = localStorage.getItem('token');
// Fetch all employment infos
export const fetchAllEmploymentInfos = createAsyncThunk(
  'employment/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/api/employmentinfo`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch employment info by user ID
export const fetchEmploymentInfoByUserId = createAsyncThunk(
  'employment/fetchByUserId',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/api/employmentinfo/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create new employment info
export const createEmploymentInfo = createAsyncThunk(
  'employment/create',
  async (employmentData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API}/api/employmentinfo`, employmentData, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update employment info by ID
export const updateEmploymentInfo = createAsyncThunk(
  'employment/update',
  async ({ id, employmentData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API}/api/employmentinfo/${id}`, employmentData, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete employment info by ID
export const deleteEmploymentInfo = createAsyncThunk(
  'employment/delete',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API}/api/employmentinfo/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice
const employmentSlice = createSlice({
  name: 'employment',
  initialState: {
    employmentInfos: [],
    employee:[],
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all employment infos
      .addCase(fetchAllEmploymentInfos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllEmploymentInfos.fulfilled, (state, action) => {
        state.loading = false;
        state.employmentInfos = action.payload;
      })
      .addCase(fetchAllEmploymentInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch by user ID
      .addCase(fetchEmploymentInfoByUserId.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmploymentInfoByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.employee = action.payload;
      //   const updatedInfos = state.employmentInfos.filter(
      //     (info) => info.userId !== action.payload.userId
      //   );
      //   updatedInfos.push(action.payload);
      //   state.employmentInfos = updatedInfos;
      })
      .addCase(fetchEmploymentInfoByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create new employment info
      .addCase(createEmploymentInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(createEmploymentInfo.fulfilled, (state, action) => {
        state.loading = false;
        // state.employmentInfos.push(action.payload);
      })
      .addCase(createEmploymentInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update employment info
      .addCase(updateEmploymentInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateEmploymentInfo.fulfilled, (state, action) => {
        state.loading = false;
        // state.employmentInfos = state.employmentInfos.map((info) =>
        //   info._id === action.payload._id ? action.payload : info
        // );
      })
      .addCase(updateEmploymentInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete employment info
      .addCase(deleteEmploymentInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteEmploymentInfo.fulfilled, (state, action) => {
        state.loading = false;
        // state.employmentInfos = state.employmentInfos.filter(
        //   (info) => info._id !== action.payload
        // );
      })
      .addCase(deleteEmploymentInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = employmentSlice.actions;

export default employmentSlice.reducer;
