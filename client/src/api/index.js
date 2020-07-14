import request from '@/utils/request';

export const getJobs = (params) => request.get("/getjobs", { params })

export const getCities = (params) => request.get("/getcity", { params })