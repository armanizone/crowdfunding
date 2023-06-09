import React from 'react'
import { Button } from '@mantine/core'
import { openConfirmModal } from '@mantine/modals'
import { Reward } from '../../../../components'
import { IReward } from '../../../../utils/types/reward.type'
import { showNotification } from '@mantine/notifications'

import { useEditProjectContext } from '../../context/EditProjectContext'


function Fees({reward, handleRewardEdit}: any) {

  const { rewards, id } = useEditProjectContext()

  const deleteReward = async (rewardId: string, image: string) => {
    
  }

  const confirmDelete = (id: string, image: string) => openConfirmModal({
    title: 'Подтверждение действия',
    centered: true,
    children: (
      <p>Вы действительно хотите удалить вознаграждение</p>
    ),
    labels: { confirm: 'Удалить', cancel: 'Отмена' },
    confirmProps: {
      color: 'red'
    },
    onConfirm: () => deleteReward(id, image)
  })

  return (
    <div className='wrapper'>
      <div className='p-4 border border-slate-200 mb-4'>
        <span className='inline-block mb-4 text-lg font-medium'>
          Поддержать на любую сумму
        </span>
        <p>
          Спасибо, мне не нужно вознаграждение, я просто хочу поддержать проект.
        </p>
      </div>
      <div className='flex flex-col gap-y-4'>
        <Reward reward={reward} />
        {rewards?.map((item: IReward, i: number) => {
          return (
            <div className='relative group' key={i} style={{ animationDelay: `${((i + 1) * 150)}ms` }}>
              <Reward reward={item} className='' />
              <div className='flex justify-end gap-x-4 border border-t-0 py-2 px-4 opacity-0 group-hover:opacity-100 group-hover:shadow-sm transition-all duration-200'>
                <Button compact size='sm' variant='subtle' onClick={() => handleRewardEdit(item)}>
                  Редактировать
                </Button>
                <Button compact size='sm' variant='subtle' color='red' onClick={() => confirmDelete(item?.id!, item?.image!)}>
                  Удалить
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Fees