import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../API";

// Async thunks for API operations
const token = localStorage.getItem("token");
// Fetch all categories
export const fetchCategories = createAsyncThunk(
  "documentCategory/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/documents/v1/categories`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch a single category by ID
export const fetchCategoryById = createAsyncThunk(
  "documentCategory/fetchCategoryById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/documents/v1/categories/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Create a new category
export const createCategory = createAsyncThunk(
  "documentCategory/createCategory",
  async (categoryData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API}/documents/v1/categories`,
        categoryData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
          },
        }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update a category
export const updateCategory = createAsyncThunk(
  "documentCategory/updateCategory",
  async ({ id, categoryData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API}/documents/v1/categories/${id}`,
        categoryData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
          },
        }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Delete a category
export const deleteCategory = createAsyncThunk(
  "documentCategory/deleteCategory",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API}/documents/v1/categories/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      return id; // Return the deleted ID for state update
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Slice
const documentCategorySlice = createSlice({
  name: "documentCategory",
  initialState: {
    categories: [],
    category: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetCategoryState: (state) => {
      state.category = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all categories
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch category by ID
      .addCase(fetchCategoryById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
        state.error = null;
      })
      .addCase(fetchCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create category
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        // state.categories.push(action.payload);
        state.error = null;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update category
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;
        // state.categories = state.categories.map((cat) =>
        //   cat.id === action.payload.id ? action.payload : cat
        // );
        state.error = null;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete category
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        // state.categories = state.categories.filter(
        //   (cat) => cat.id !== action.payload
        // );
        state.error = null;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCategoryState } = documentCategorySlice.actions;

export default documentCategorySlice.reducer;
