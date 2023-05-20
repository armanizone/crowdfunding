import React from 'react'
import { Card } from '../../components'
import { IProject } from '../../utils/types/project.type'
import Search from './Search'
import FilterCategory from './FilterCategory'

import { useMediaQuery } from '@mantine/hooks';

function Explore() {

  // where('status', '!=', 'created')

  const items = [] as IProject[]

  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <div className='w-full'>
      <div className="container">

        <div className='grid md:grid-cols-[200px_auto] xl:grid-cols-[250px_auto] gap-4'>
          {matches && 
            <div className='bg-white rounded-md border p-4'>
              <FilterCategory matches/>
            </div>
          }
          <div>
            <Search matches={matches} />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
              {items?.map((item: IProject, i: number) => {
                return (
                  <Card 
                    project={item} 
                    key={i} 
                    type='active'
                    style={{ animationDelay: `${((i + 1) * 150)}ms` }}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore