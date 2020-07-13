import request from '@/utils/request';

export const getJobs = (params) => request.get("/getjobs", { params })