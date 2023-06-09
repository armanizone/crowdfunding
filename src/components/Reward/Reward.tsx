import React from 'react'
import clsx from 'clsx'
import { Button } from '@mantine/core'
import { IReward } from '../../utils/types/reward.type'
import dayjs from 'dayjs'
import Image from '../Image'
import { RewardsRecord } from '../../lib/pocketbase-types'

interface RewardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  reward: RewardsRecord,
}

function Reward({ reward, className, ...props }: RewardProps): JSX.Element {

  const sending = dayjs(new Date()).locale('ru').format('MMMM D, YYYY')

  return (
    <div
      className={clsx(className, 
        'flex flex-col p-3 md:p-4 rounded-md border relative bg-white overflow-hidden fadeup-animation transition-all duration-150')
      }
      {...props}
    >
      <div className='relative overflow-hidden'>
        <Image
          obj={reward}
        />
      </div>
      <div className='grow mt-4 space-y-3'>
        <h2 className='text-base font-semibold'>{reward?.title}</h2>
        <p className='text-sm'>{reward?.description}</p>
        <div className='text-slate-500 text-sm'>
          {reward?.how_to_get}
        </div>
      </div>
      <div className='shrink space-y-3 mt-4'>
        <div>
          <p className='text-slate-400 text-sm'>Примерная дата доставки</p>
          <time className='text-sm'>{sending}</time>
        </div>
        <div className='flex justify-between'>
          <div>
            {reward.cost} цена
          </div>
          <div>
            {reward.count} количество
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <Button fullWidth className='tracking-widest uppercase'>
          Приобрести
        </Button>
      </div>
    </div>
  )
}

export default Reward