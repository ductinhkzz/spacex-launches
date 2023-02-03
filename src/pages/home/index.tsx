import { Box } from '@mui/material';
import { LIMIT_REQUEST } from 'appConstants';
import { LoadingItem } from 'components';
import LaunchItem from 'components/LaunchItem';
import { useRedux } from 'hooks';
import { useCallback, useEffect } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { ILaunch, RootStateType } from 'redux/constants';
import { fetchLaunchesRequest, clearState } from 'redux/slice';

function Home() {
  const { dispatch, appSelector } = useRedux();
  const { launches, canLoadMore } = appSelector<RootStateType>((state) => state.root);

  const loadMore = useCallback(
    (index: number) => {
      canLoadMore &&
        dispatch(
          fetchLaunchesRequest({
            limit: LIMIT_REQUEST,
            offset: index + 1,
          })
        );
    },
    [canLoadMore, dispatch]
  );

  useEffect(() => {
    dispatch(
      fetchLaunchesRequest({
        limit: LIMIT_REQUEST,
        offset: 0,
      })
    );
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBlockStart: 6, border: '1px solid #E7EBF0' }}>
      <Box sx={{ width: '100%' }}>
        <Virtuoso<ILaunch>
          style={{ height: 600 }}
          data={launches}
          endReached={loadMore}
          overscan={200}
          itemContent={(_index, item) => <LaunchItem {...item} />}
          components={{ Footer: () => <LoadingItem canLoadMore={canLoadMore} /> }}
        />
      </Box>
    </Box>
  );
}

export default Home;
