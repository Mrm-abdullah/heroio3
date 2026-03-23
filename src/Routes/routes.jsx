import React from 'react';
import { createBrowserRouter } from "react-router"
import Root from '../components/Root';
import Home from '../pages/Home/Home';
import App from '../App';
import Installation from '../pages/Installation/Installation';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, Component: Home },
      { path: "app", Component: App },
      { path: "installation", Component: Installation },
      { path: "404", Component: PageNotFound },
    ],
  },
]);

export default router;