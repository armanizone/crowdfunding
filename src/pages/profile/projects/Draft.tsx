import { Pagination } from '@mantine/core'
import React from 'react'
import { Load } from '../../../components'
import { IProject } from '../../../utils/types/project.type'
import Heading from '../components/Heading'
import Pillar from '../components/Pillar'

export interface DraftProps {
  values?: any[],
  loading?: boolean, 
  refetch?: () => void,
}

function Draft({values = [], loading }: DraftProps) {

  if (loading) return <Load/>

  return (
    <div className='w-full h-full relative'>
      <div className='flex justify-between gap-x-4'>
        <Heading title='Черновики' description='Черновики ваших проектов' />
      </div>
      <div className='flex flex-col gap-y-8 mt-4'>
        {values?.map((item: IProject) => {
          return (
            <Pillar project={item} type='draft' key={item.id} />
          )
        })}
      </div>
      <div className="flex justify-end">
      </div>
    </div>
  )
}

export default Draft