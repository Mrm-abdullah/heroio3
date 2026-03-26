import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from "react-router"
import Root from '../components/Root';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Loader from '../components/Loader/Loader';

const Home = lazy(() => import('../pages/Home/Home'))
const AllApps = lazy(() => import('../pages/AllApps/AllApps'))
const AppDetails = lazy(() => import('../components/AppDetails/AppDetails'))
const Installation = lazy(() => import('../pages/Installation/Installation'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <PageNotFound />,
    children: [
      { 
        index: true, 
        loader: () => fetch('apps.json'), 
        element: <Suspense fallback={<Loader></Loader>}><Home></Home></Suspense>
      },
      { 
        path: "/app", 
        loader: () => fetch('apps.json'), 
        element: <Suspense fallback={<Loader></Loader>}><AllApps></AllApps></Suspense>
      },
      { 
        path: "/appDetails/:id", 
        loader: () => fetch('apps.json'), 
        element: <Suspense fallback={<Loader></Loader>}><AppDetails></AppDetails></Suspense>
      },
      { 
        path: "/installation", 
        loader: () => fetch('apps.json'), 
        element: <Suspense fallback={<Loader></Loader>}><Installation></Installation></Suspense>
      },
    ],
  },
]);

export default router;