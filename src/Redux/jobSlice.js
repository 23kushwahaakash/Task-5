import { createSlice } from "@reduxjs/toolkit";

const jobslice = createSlice({
    name : "job",
    initialState:{
        jobTitle:null,
        jobGiverId:null,
        companyName:null,
        jobId:null,
        jobDescription:null,
        salaryMinimum:null,
        salaryMaximum:null,
        jobSkills:null,
        jobExperience:null,
        jobTime:null,
        jobLocation:null,
        jobCategory:null,
        jobTags:null,
        jobExperienceLevel:null,
    },
    reducers:{
        setJobTitle:(state, action) => {
            state.jobTitle = action.payload;
        },

        setJobGiverId:(state,action) => {
            state.jobGiverId = action.payload;
        },

        setCompanyName:(state, action) =>{
            state.companyName = action.payload;
        },

        setJobId:(state,action) => {
            state.jobId = action.payload;
        },

        setJobDescription:(state, action) => {
            state.jobDescription = action.payload;
        },

        setSalaryMinimum:(state, action) => {
            state.salaryMinimum = action.payload;
        },

        setSalaryMaximum:(state, action) => {
            state.salaryMaximum = action.payload;
        },

        setJobSkills:(state, action) => {
            state.jobSkills = action.payload;
        },

        setJobExperience:(state, action) => {
            state.jobExperience = action.payload;
        },

        setJobTime:(state, action) => {
            state.jobTime = action.payload;
        },

        setJobLocation:(state, action) => {
            state.jobLocation = action.payload;
        },

        setJobCategory:(state, action) => {
            state.jobCategory = action.payload;
        },

        setJobTags:(state, action) => {
            state.jobTags = action.payload;
        },

        setJobExperienceLevel:(state, action) => {
            state.jobExperienceLevel = action.payload;
        },

        clearJob: (state) => {
            state.jobCategory = null;
            state.jobDescription = null;
            state.jobExperience = null;
            state.jobExperienceLevel = null;
            state.jobLocation = null;
            state.jobSkills = null;
            state.jobTags = null;
            state.jobTime = null;
            state.jobTitle = null;
            state.salaryMaximum = null;
            state.salaryMinimum = null;
        }
        
    }
})
export const {setJobCategory,setJobGiverId,setJobId,setCompanyName,setJobDescription,setJobExperience,setJobExperienceLevel,setJobLocation,setJobSkills,setJobTags,setJobTime,setJobTitle,setSalaryMaximum,setSalaryMinimum,clearJob} = jobslice.actions;
export default jobslice.reducer;
export const jobSliceReducer = jobslice.reducer;

