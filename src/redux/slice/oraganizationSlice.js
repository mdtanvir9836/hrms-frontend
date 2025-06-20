import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../API";

export const addOrganization = createAsyncThunk(
  "organization/addOrganization",
  async (organizationData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API}/organization/organization/create`,
        organizationData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.organization._id) {
        localStorage.setItem("orgId", response.data.organization._id);
      }
      // console.log(response);

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : { message: "Network Error" }
      );
    }
  }
);

export const updateOrganization = createAsyncThunk(
  "organization/updateOrganization",
  async ({ id, updateData }, { rejectWithValue }) => {
    console.log({id, updateData});

    try {
      const formData = new FormData();
      Object.keys(updateData).forEach((key) => {
        formData.append(key, updateData[key]);
      });

      const response = await axios.put(
        `${API}/organization/organization/update/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : { message: "Network Error" }
      );
    }
  }
);
export const fetchOrganizationById = createAsyncThunk(
  "organization/fetchOrganizationById",
  async (orgId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API}/organization/organization/viewById/${orgId}`
      );
      return response.data.info; // Assuming "info" contains organization details
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error fetching organization"
      );
    }
  }
);

const organizationSlice = createSlice({
  name: "organization",
  initialState: {
    organization: null,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetState: (state) => {
      state.organization = null;
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrganization.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addOrganization.fulfilled, (state, action) => {
        // console.log(action.payload);

        state.loading = false;
        // state.organization = action.payload.organization;
        // state.user = action.payload.user;
        state.error = null;
      })
      .addCase(addOrganization.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error adding organization";
      })
      // Update organization
      .addCase(updateOrganization.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateOrganization.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.loading = false;
        // state.organization = action.payload.organization;
        state.error = null;
      })
      .addCase(updateOrganization.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error updating organization";
      })
      .addCase(fetchOrganizationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrganizationById.fulfilled, (state, action) => {
        state.loading = false;
        state.organization = action.payload;
      })
      .addCase(fetchOrganizationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = organizationSlice.actions;

export default organizationSlice.reducer;
