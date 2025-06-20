import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching all countries
export const fetchCountries = createAsyncThunk(
  "countries/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      return response.data; // Return the countries data
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching countries");
    }
  }
);

// Create the countries slice
const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Optional: You can add any custom actions if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload.map((country) => ({
          name: country.name.common,
          dial_code: country.idd?.root + (country.idd?.suffixes?.[0] || ""),
          flag: country.flags.png,
        }));
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the reducer to be used in the store
export default countriesSlice.reducer;
