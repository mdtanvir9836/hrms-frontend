import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../API";

// Async thunk to upload a document with recipients
export const uploadDocumentWithRecipients = createAsyncThunk(
  "document/upload",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred while uploading."
      );
    }
  }
);

// Initial state
const initialState = {
  document: [],
  loading: false,
  error: null,
  success: false,
};

// Document slice
const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    resetState: (state) => {
      state.document = [];
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadDocumentWithRecipients.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(uploadDocumentWithRecipients.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.document = action.payload;
      })
      .addCase(uploadDocumentWithRecipients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to upload document.";
      });
  },
});

export const { resetState } = documentSlice.actions;
export default documentSlice.reducer;
