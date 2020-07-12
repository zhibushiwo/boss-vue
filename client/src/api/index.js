import request from '@/utils/request';

export const getJobs = () => request.get("/getjobs")