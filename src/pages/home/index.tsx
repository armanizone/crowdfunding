import React from 'react'
import Courses from './widgets/Courses'
import Cover from './widgets/Cover'
import Hero from './widgets/Hero'
import Sidebar from './widgets/Sidebar'
import Stats from './widgets/Stats'


function Home (): JSX.Element {
  return (
    <>
      <div>
        <Hero/>
        <div className="container">
          <div className='main-grid'>
            <Cover/>
            <Sidebar/>
            <Stats/>
            <Courses/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
