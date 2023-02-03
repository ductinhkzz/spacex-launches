import { Skeleton, Box, SxProps, Theme } from '@mui/material';
import React, { useState } from 'react';

interface LazyLoadImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  sx?: SxProps<Theme>;
}

function LazyLoadImage(props: LazyLoadImageProps) {
  const [loaded, setLoaded] = useState(false);
  const onLoad = () => setLoaded(true);

  return (
    <>
      <Box component='img' {...props} sx={{ ...props.sx, ...(!loaded && { display: 'none' }) }} onLoad={onLoad} />
      {!loaded && <Skeleton variant='rectangular' width={props.width} height={props.height} />}
    </>
  );
}

export { LazyLoadImage };
