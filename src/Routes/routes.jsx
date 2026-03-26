import React, { Suspense } from 'react';
import { createBrowserRouter } from "react-router"
import Root from '../components/Root';
import Home from '../pages/Home/Home';
import Installation from '../pages/Installation/Installation';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import AllApps from '../pages/AllApps/AllApps';
import AppDetails from '../components/AppDetails/AppDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { 
        index: true, 
        loader: () => fetch('apps.json'), 
        element: <Suspense fallback={`load hocce vai`}><Home></Home></Suspense>
      },
      { 
        path: "/app", 
        loader: () => fetch('apps.json'), 
        element: <Suspense fallback={`load hocce vai`}><AllApps></AllApps></Suspense>
      },
      { 
        path: "/appDetails/:id", 
        loader: () => fetch('apps.json'), 
        element: <Suspense fallback={`load hocce vai`}><AppDetails></AppDetails></Suspense>
      },
      { 
        path: "/installation", 
        loader: () => fetch('apps.json'), 
        element: <Suspense fallback={`load hocce vai`}><Installation></Installation></Suspense>
      },
      { 
        path: "404", 
        Component: PageNotFound 
      },
    ],
  },
]);

export default router;