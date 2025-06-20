import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../API';

const token = localStorage.getItem('token'); // Get the token from local storage
// const role = token ? getUserRoleFromToken(token) : null; 

// Create a leave request
export const createLeaveRequest = createAsyncThunk(
  'leaves/createLeaveRequest',
  async (leaveData, { rejectWithValue }) => {
    console.log("get leaveData",leaveData);   
    try {
      const response = await axios.post(`${API}/leave/leaves`, leaveData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response);      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

// Approve a leave request
export const approveLeaveRequest = createAsyncThunk(
  'leaves/approveLeaveRequest',
  async ({ leaveId, managerComments }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API}/leave/leaves/${leaveId}/approve`, { managerComments }, {
        headers: {
          Authorization: `Bearer ${token}`, 
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

// Reject a leave request
export const rejectLeaveRequest = createAsyncThunk(
  'leaves/rejectLeaveRequest',
  async ({ leaveId, managerComments }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API}/leave/leaves/${leaveId}/reject`, { managerComments }, {
        headers: {
          Authorization: `Bearer ${token}`, 
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

// View all leaves
export const viewLeaves = createAsyncThunk(
  'leaves/viewLeaves',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/leave/leave/viewall`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      });
      return response.data.info;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

export const fetchLeavesByUserId = createAsyncThunk(
  'leaves/fetchByUserId',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/leave/leaves/view/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateLeave = createAsyncThunk(
  "leave/updateLeave",
  async ({ leaveId, leaveData }, { rejectWithValue }) => {
    console.log("Submit leaveId",leaveId);
    console.log("Submit leaveData",leaveData);
    
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${API}/leave/leaves/${leaveId}/update`,
        leaveData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error updating leave");
    }
  }
);


// Initial State
const initialState = {
  leave:[],
  leaves: [],
  loading: false,
  error: null,
  success: null,
};

// Leave Slice
const leaveSlice = createSlice({
  name: 'leaves',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Create Leave Request
    builder.addCase(createLeaveRequest.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(createLeaveRequest.fulfilled, (state, action) => {
      console.log(action);
      
      state.loading = false;
      state.success = 'Leave request created successfully';
      // state.leaves = action.payload; 
    });
    builder.addCase(createLeaveRequest.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to create leave request';
    });

    // Approve Leave Request
    builder.addCase(approveLeaveRequest.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(approveLeaveRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.success = 'Leave request approved';
      // const index = state.leaves.info.findIndex((leave) => leave._id === action.payload._id);
      // if (index !== -1) {
      //   state.leaves.info[index] = action.payload; 
      // }
    });
    builder.addCase(approveLeaveRequest.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to approve leave request';
    });

    // Reject Leave Request
    builder.addCase(rejectLeaveRequest.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(rejectLeaveRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.success = 'Leave request rejected';
      // const index = state.leaves.info.findIndex((leave) => leave._id === action.payload._id);
      // if (index !== -1) {
      //   state.leaves.info[index] = action.payload; 
      // }
    });
    builder.addCase(rejectLeaveRequest.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to reject leave request';
    });

    // View Leaves
    builder.addCase(viewLeaves.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(viewLeaves.fulfilled, (state, action) => {
      state.loading = false;
      state.leaves = action.payload; // Populate the state with leaves data
    });
    builder.addCase(viewLeaves.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to fetch leave data';
    })
    .addCase(fetchLeavesByUserId.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchLeavesByUserId.fulfilled, (state, action) => {
      state.loading = false;
      state.leave = action.payload;
    })
    .addCase(fetchLeavesByUserId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to fetch leaves';
    })
    .addCase(updateLeave.pending, (state) => {
      state.status = "loading";
    })
    .addCase(updateLeave.fulfilled, (state, action) => {
      state.status = "succeeded";
      // state.leaves = state.leaves.map((leave) =>
      //   leave.id === action.payload.id ? action.payload : leave
      // );
    })
    .addCase(updateLeave.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  },

});

// Export the reducer to be added to the store
export default leaveSlice.reducer;
