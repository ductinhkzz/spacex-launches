import { Outlet } from 'react-router-dom';
import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@mui/material';

function DefaultLayout() {
  return (
    <>
      <CssBaseline />
      <AppBar component='nav' sx={{ boxShadow: 'none', borderBlockEnd: '1px solid #E7EBF0' }} color='inherit'>
        <Toolbar>
          <Typography variant='h6' component='div'>
            SpaceX Launches
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Toolbar />
        <Outlet />
      </Container>
    </>
  );
}

export { DefaultLayout };
