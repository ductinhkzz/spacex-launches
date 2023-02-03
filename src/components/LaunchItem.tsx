import { Card, CardMedia, Box, Typography } from '@mui/material';
import { ILaunch } from 'redux/constants';

function LaunchItem(props: ILaunch) {
  const {
    mission_name,
    details,
    flight_number,
    launch_date_utc,
    links: { mission_patch_small, wikipedia },
  } = props;

  const cardSx = {
    display: 'flex',
    gap: 2,
    p: 2,
    boxShadow: 'none',
    borderBlockEnd: '1px solid #ddd',
    borderRadius: 0,
    '&:hover': {
      shadow: 1,
      color: 'gray',
      backgroundColor: 'lightblue',
      cursor: 'pointer',
    },
  };

  const onClick = () => !!wikipedia && window.open(wikipedia, '_blank', 'noopener,noreferrer');

  return (
    <Card sx={cardSx} onClick={onClick}>
      <CardMedia component='img' sx={{ width: 80, height: 80 }} image={mission_patch_small} alt={mission_name} />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 'auto', width: 10 }}>
        <Typography component='div' variant='subtitle2'>
          {mission_name}
        </Typography>
        <Typography variant='body2' color='text.secondary' component='div'>
          Flight number: {flight_number}
        </Typography>
        <Typography variant='body2' color='text.secondary' component='div' noWrap>
          {details}
        </Typography>
        <Typography
          variant='caption'
          display='block'
          gutterBottom
          sx={{ textAlign: 'right', marginBlockStart: 1, marginBlockEnd: 0 }}>
          {launch_date_utc}
        </Typography>
      </Box>
    </Card>
  );
}

export default LaunchItem;
