import { Box } from '@mui/material';
import { LoadingItem } from 'components';
import LaunchItem from 'components/LaunchItem';
import { useRedux } from 'hooks';
import { useCallback, useEffect } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { ILaunch, RootStateType } from 'redux/constants';
import { fetchLaunchesRequest, clearState } from 'redux/slice';

function Home() {
  const { dispatch, appSelector } = useRedux();
  const { launches } = appSelector<RootStateType>((state) => state.root);

  const loadMore = useCallback(
    (index: number) => {
      dispatch(
        fetchLaunchesRequest({
          limit: 20,
          offset: index + 1,
        })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(
      fetchLaunchesRequest({
        limit: 20,
        offset: 50,
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
          itemContent={(index, item) => <LaunchItem {...item} />}
          components={{ Footer: LoadingItem }}
        />
      </Box>
    </Box>
  );
}

export default Home;
