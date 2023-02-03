import { all, call, takeLatest, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';

import ApiService from 'api/api.service';
import { fetchLaunchesRequest, fetchLaunchesSuccess, fetchLaunchesFailure } from './slice';
import { FetchLaunchesPayload, ILaunch } from './constants';

function* fetchLaunches(action: PayloadAction<FetchLaunchesPayload>) {
  try {
    const response = (yield call(ApiService.getLaunches, action.payload)) as AxiosResponse<ILaunch[]>;
    if (response.status === 200) {
      yield put(fetchLaunchesSuccess(response.data));
    } else {
      yield put(fetchLaunchesFailure());
    }
  } catch (error) {
    yield put(fetchLaunchesFailure());
  }
}

function* saga() {
  yield takeLatest(fetchLaunchesRequest.type, fetchLaunches);
}

export default function* rootSaga() {
  yield all([saga()]);
}
