// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice';
// import jobSlice from '../slice/jobSlice';
import employeeSlice from '../slice/employeeSlice';
import organizationReducer from '../slice/oraganizationSlice';
import userProfileReducer from '../slice/userProfileSlice';
// import SigninReducer from '../slice/signinSlice';
import leaveReducer from '../slice/leaveSlice';
import leaveTypeReducer from '../slice/leaveTypeSlice';
// import documentRequestReducer from '../slice/documentRequestSlice'
// import documentSubmissionReducer from '../slice/documentSubmissionSlice'
import emailReducer from "../slice/emailSlice"
import countriesReducer from "../slice/CountrySlice"
import contactReducer from "../slice/ContactSlice"
import bankReducer from "../slice/bankSlice"
import leaveAllocationReducer from "../slice/leaveAllocationSlice"
import documentCategoryReducer from "../slice/documentCategorySlice"
import documentReducer from "../slice/documentSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    // job : jobSlice,
    employee : employeeSlice,
    organization: organizationReducer,
    profile: userProfileReducer,
    // auth: SigninReducer,
    leaves: leaveReducer,
    leaveTypes : leaveTypeReducer,
    // documentRequest : documentRequestReducer,
    // documentSubmission : documentSubmissionReducer,
    email: emailReducer,
    countries: countriesReducer,
    contact : contactReducer,
    bank : bankReducer,
    leaveAllocation : leaveAllocationReducer,
    documentCategory : documentCategoryReducer,
    document : documentReducer
  },
});

export default store;
