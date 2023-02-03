import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoadComponent } from 'components';
import { DefaultLayout } from 'layout';
const Home = React.lazy(() => import('../pages/home'));

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<LoadComponent component={Home} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
