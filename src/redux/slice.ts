import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FetchLaunchesPayload, RootStateType, ILaunch } from './constants';
import { LIMIT_REQUEST } from 'appConstants';

const INIT_STATE: RootStateType = {
  isLoading: false,
  errorMessage: '',
  launches: [],
  canLoadMore: true,
};

const rootSlice = createSlice({
  name: 'rootSlice',
  initialState: INIT_STATE,
  reducers: {
    fetchLaunchesRequest: (state, _action: PayloadAction<FetchLaunchesPayload>) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    fetchLaunchesSuccess: (state, action: PayloadAction<ILaunch[]>) => {
      return {
        ...state,
        isLoading: false,
        launches: [...state.launches, ...action.payload],
        errorMessage: '',
        canLoadMore: action.payload.length === LIMIT_REQUEST,
      };
    },
    fetchLaunchesFailure: (state) => {
      return {
        ...state,
        isLoading: false,
        errorMessage: 'API failure.',
      };
    },
    clearState: () => {
      return INIT_STATE;
    },
  },
});

export const { fetchLaunchesRequest, fetchLaunchesSuccess, fetchLaunchesFailure, clearState } = rootSlice.actions;

export default rootSlice.reducer;
