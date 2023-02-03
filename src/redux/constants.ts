export type RootStateType = {
  isLoading: boolean;
  launches: ILaunch[];
  errorMessage: string;
  canLoadMore: boolean;
};

export interface FetchLaunchesPayload {
  id?: boolean;
  limit?: number;
  offset?: number;
  sort?: string;
  order?: string;
}

export interface ILaunch {
  _id: string;
  mission_name: string;
  launch_date_utc: string;
  flight_number: number;
  details: string | null;
  links: {
    mission_patch_small: string;
    wikipedia: string;
  };
}
