import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import AuthForm from '../modules/login'
import { MantineProvider, createEmotionCache } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'

function Layout() {

  const myCache = createEmotionCache({
    key: 'mantine',
    prepend: false
  });

  return (
    <MantineProvider
      emotionCache={myCache} 
      theme={{
        defaultRadius: 6
      }}
    >
    <ModalsProvider modals={{ auth: AuthForm }}>
      <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
      <Notifications/>
    </ModalsProvider>
  </MantineProvider>

  )
}

export default Layout