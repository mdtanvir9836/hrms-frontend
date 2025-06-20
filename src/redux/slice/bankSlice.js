import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../API';

// Thunks for API Calls
const token = localStorage.getItem('token');
// Create new bank details
export const createBankDetails = createAsyncThunk(
  'bankDetails/createBankDetails',
  async (bankDetails, { rejectWithValue }) => {
    console.log("bankDetails", bankDetails);
    
    try {
      const response = await axios.post(`${API}/bank/bank-details`, bankDetails, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      // console.log(response);
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update bank details by ID
export const updateBankDetails = createAsyncThunk(
  'bankDetails/updateBankDetails',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API}/bank/bank-details/${id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      // console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Get bank details by userId
export const getBankDetailsByUser = createAsyncThunk(
  'bankDetails/getBankDetailsByUser',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/bank/bank-detailsUser/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      // console.log(response);
      return response.data.info;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice
const bankDetailsSlice = createSlice({
  name: 'bankDetails',
  initialState: {
    bankDetails: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Create Bank Details
    builder.addCase(createBankDetails.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(createBankDetails.fulfilled, (state, action) => {
      state.status = 'succeeded';
      // state.bankDetails = action.payload;
    });
    builder.addCase(createBankDetails.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });

    // Update Bank Details
    builder.addCase(updateBankDetails.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(updateBankDetails.fulfilled, (state, action) => {
      state.status = 'succeeded';
      // state.bankDetails = action.payload;
    });
    builder.addCase(updateBankDetails.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });

    // Get Bank Details by User
    builder.addCase(getBankDetailsByUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getBankDetailsByUser.fulfilled, (state, action) => {
      // console.log("action.payload", action.payload);
      
      state.status = 'succeeded';
      state.bankDetails = action.payload; // Extract "info" field
    });
    builder.addCase(getBankDetailsByUser.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const { resetStatus } = bankDetailsSlice.actions;

export default bankDetailsSlice.reducer;
