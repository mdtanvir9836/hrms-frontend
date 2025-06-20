import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {API} from "../API"

const token = localStorage.getItem('token');
// Async thunk for creating a contact
export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API}/contact/contact/add`, contactData, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      // console.log(response);
      return response.data; // Return the created contact
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async Thunk to update a contact by ID
export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API}/contact/contact/update/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      // console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data ? error.response.data : error.message
      );
    }
  }
);

export const getContactById = createAsyncThunk(
  'contacts/getContactById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/contact/contact/viewUserId/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      // console.log(response);
      
      return response.data.info; // Return the fetched contact
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.loading = false;
        // state.contacts.push(action.payload); 
      })
      .addCase(createContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;
        // state.contacts = action.payload;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getContactById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContactById.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(getContactById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactsSlice.reducer;
