import React from 'react'
import { Load } from '../../../components'
import Heading from '../components/Heading'
import Pillar from '../components/Pillar'
import { DraftProps } from './Draft'


function Closed({values = [], loading }: DraftProps) {


  if (loading) return <Load />

  return (
    <div className='w-full h-full relative'>
      <Heading title='Завершенные проекты' description='Ваши завершенные проекты' />
      <div className='flex flex-col gap-y-4 mt-4'>
        {values?.map((item: any) => {
          return (
            <Pillar project={item} type='closed' key={item.id} />
          )
        })}
      </div>
    </div>
  )
}

export default Closed