import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../API";

// Async Thunk for sending email
export const sendEmail = createAsyncThunk(
  "email/sendEmail",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API}/email/mail`, { to: email });
      console.log(response);

      return response.data; // Return the API response
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to send email"
      );
    }
  }
);

const emailSlice = createSlice({
  name: "email",
  initialState: {
    loading: false,
    message: "",
    error: "",
  },
  reducers: {
    resetEmailState: (state) => {
      state.loading = false;
      state.message = "";
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEmail.pending, (state) => {
        state.loading = true;
        state.message = "";
        state.error = "";
      })
      .addCase(sendEmail.fulfilled, (state, action) => {
        state.loading = false;
        // state.message = action.payload.message;
        state.error = "";
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.loading = false;
        state.message = "";
        state.error = action.payload;
      });
  },
});

export const { resetEmailState } = emailSlice.actions;
export default emailSlice.reducer;
