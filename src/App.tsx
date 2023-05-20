import React from 'react';
import { createEmotionCache, MantineProvider, Notification } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import About from './pages/about';
import EarlyAccess from './pages/about/early-access';
import Programs from './pages/about/programs';
import Projects from './pages/about/projects';
import Create from './pages/create';
import Explore from './pages/explore';
import Collection from './pages/explore/collection';
import Home from './pages/home';
import Profile from './pages/profile';
import Bill from './pages/profile/Bill';
import Investions from './pages/profile/Investions';
import MyProjects from './pages/profile/projects';
import Supports from './pages/profile/Supports';
import Project from './pages/project';
import Settings from './pages/profile/settings';
import Draft from './pages/profile/projects/Draft';
import Active from './pages/profile/projects/Active';
import Closed from './pages/profile/projects/Closed';
import UserData from './pages/profile/settings/UserData';
import ChangePassword from './pages/profile/settings/ChangePassword';


import Comments from './pages/project/widgets/body/Comments';
import Faq from './pages/project/widgets/body/Faq';
import Rating from './pages/project/widgets/body/Rating'; 
import Description from './pages/project/widgets/body/Description';

import Fee from './pages/project/widgets/Fee';
import Incubator3 from './pages/incubator'
import AuthForm from './modules/login';
import Notfound from './pages/not-found';
import EditProject from './pages/edit-project';
import Main from './pages/edit-project/widgets/Main';
import Details from './pages/edit-project/widgets/Details';
import Rewards from './pages/edit-project/widgets/Rewards';
import Verification from './pages/edit-project/widgets/Verification';
import Incubator from './pages/incubator';
import Layout from './layout/Layout';

const router = createBrowserRouter([
  { 
    element: <Layout/>, 
    children : [
      { path: '/', element: <Home/>},
      { path: '/create', element: <Create/>},
      { path: '/incubator', element: <Incubator3/>},
      { 
        path: '/about',
        children: [
          { index: true, element: <About/> },
          { path: 'early-acces', element: <EarlyAccess/>},
          { path: 'programs', element: <Programs/>},
          { path: 'projects', element: <Projects/>},
        ]
      },
      {
        path: '/explore', element: <Explore/>,
        children: [
          {path: 'collection/:name', element: <Collection/>}
        ]
      },
      { 
        path: '/profile', element: <Profile/>,
        children: [
          { path: 'bill', element: <Bill/>},
          { path: 'investions', element: <Investions/>},
          { 
            path: 'projects', 
            element: <MyProjects/>,
            children: [
              { index: true, element: <Draft/>},
              { path: 'active', element: <Active/>},
              { path: 'closed', element: <Closed/>},
            ],
          },
          { path: 'supports', element: <Supports/> },
          {
            path: 'settings', 
            element: <Settings/>,
            children: [
              { index: true, element: <UserData/>},
              { path: 'change-password', element: <ChangePassword/>}
            ]
          },
        ]
      },
      {
        path: '/project/:id',
        children: [
          { 
            element: <Project/>, 
            children: [
              { index: true, element: <Description/> },
              { path: 'comments', element: <Comments/> },
              { path: 'faq', element: <Faq/> },
              { path: 'rating', element: <Rating/> },
              { path: 'fee', element: <Fee/> },
          ] },
          { 
            path: 'edit', 
            element: <EditProject/>, 
            children: [
              { index: true, element: <Main/> },
              { path: 'details', element: <Details/> },
              { path: 'rewards', element: <Rewards/> },
              { path: 'verification', element: <Verification/> },
              { path: 'incubator', element: <Incubator/> },
            ]
          }
        ],
      },
      { path: '*', element: <Notfound/>}
    ]}
])


function App() {

  const myCache = createEmotionCache({
    key: 'mantine',
    prepend: false
  });
  
  return ( 
    <MantineProvider 
      // withGlobalStyles 
      // withNormalizeCSS 
      emotionCache={myCache} 
      theme={{
        defaultRadius: 6
      }}
    >
      <ModalsProvider modals={{ auth: AuthForm }}>
        {/* <NotificationsProvider position='top-right'> */}
          <RouterProvider router={router} />
          <Notification/>
        {/* </NotificationsProvider> */}
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
