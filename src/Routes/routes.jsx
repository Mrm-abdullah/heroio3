import React from 'react';
import { createBrowserRouter } from "react-router"
import Root from '../components/Root';
import Home from '../pages/Home/Home';
import Installation from '../pages/Installation/Installation';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import AllApps from '../pages/AllApps/AllApps';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, loader: () => fetch('apps.json'), Component: Home },
      { path: "app", loader: () => fetch('apps.json'), Component: AllApps },
      { path: "installation", Component: Installation },
      { path: "404", Component: PageNotFound },
    ],
  },
]);

export default router;