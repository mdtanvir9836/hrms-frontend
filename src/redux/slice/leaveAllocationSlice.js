import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../API';

// Async Thunks
export const createLeaveAllocation = createAsyncThunk(
  'leaveAllocation/create',
  async (leaveData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API}/allocation/allocations/create`, leaveData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchAllLeaveAllocations = createAsyncThunk(
  'leaveAllocation/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/allocation/allocations/viewall`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchLeaveAllocationByEmployee = createAsyncThunk(
  'leaveAllocation/fetchByEmployee',
  async (employeeId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/allocation/allocations/${employeeId}`);
      // console.log("response",response);
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateLeaveAllocation = createAsyncThunk(
  'leaveAllocation/update',
  async ({ allocationId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API}/allocation/allocations/${allocationId}`, updatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteLeaveAllocation = createAsyncThunk(
  'leaveAllocation/delete',
  async (allocationId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API}/allocation/allocations/${allocationId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Slice
const leaveAllocationSlice = createSlice({
  name: 'leaveAllocation',
  initialState: {
    allocations: [],
    allocationByEmployee: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearAllocationByEmployee: (state) => {
      state.allocationByEmployee = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Leave Allocation
      .addCase(createLeaveAllocation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createLeaveAllocation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // state.allocations.push(action.payload.info);
      })
      .addCase(createLeaveAllocation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to create leave allocation';
      })

      // Fetch All Leave Allocations
      .addCase(fetchAllLeaveAllocations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllLeaveAllocations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allocations = action.payload;
      })
      .addCase(fetchAllLeaveAllocations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch leave allocations';
      })

      // Fetch Leave Allocation by Employee
      .addCase(fetchLeaveAllocationByEmployee.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLeaveAllocationByEmployee.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allocationByEmployee = action.payload;
      })
      .addCase(fetchLeaveAllocationByEmployee.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch leave allocation by employee';
      })

      // Update Leave Allocation
      .addCase(updateLeaveAllocation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateLeaveAllocation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // const index = state.allocations.findIndex(
        //   (allocation) => allocation._id === action.payload.info._id
        // );
        // if (index !== -1) {
        //   state.allocations[index] = action.payload.info;
        // }
      })
      .addCase(updateLeaveAllocation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to update leave allocation';
      })

      // Delete Leave Allocation
      .addCase(deleteLeaveAllocation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteLeaveAllocation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // state.allocations = state.allocations.filter(
        //   (allocation) => allocation._id !== action.meta.arg
        // );
      })
      .addCase(deleteLeaveAllocation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to delete leave allocation';
      });
  },
});

// Export actions and reducer
export const { clearError, clearAllocationByEmployee } = leaveAllocationSlice.actions;
export default leaveAllocationSlice.reducer;
