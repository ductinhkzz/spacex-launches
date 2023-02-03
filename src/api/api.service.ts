import { FetchLaunchesPayload } from 'redux/constants';
import apiCore from './apiCore';

class ApiService {
  getLaunches(params: FetchLaunchesPayload) {
    return apiCore.get('/launches', { params: { id: true, ...params } });
  }
}

const service = new ApiService();

export default service;
