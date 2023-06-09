import { Button } from '@mantine/core'
import dayjs from 'dayjs'
import React from 'react'
import { Link } from 'react-router-dom'
import { IProject } from '../../../utils/types/project.type'
import clsx from 'clsx'
import { PreviewProjectModal, Tag, Image } from '../../../components'
import { openConfirmModal } from '@mantine/modals'

import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { BsEye } from 'react-icons/bs'
import { ProjectsRecord } from '../../../lib/pocketbase-types'

interface PillarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  project: ProjectsRecord,
  type: 'draft' | 'active' | 'closed' | 'moderation',
}

function Pillar({ project, type, className, ...props }: PillarProps):JSX.Element {

  const createdAt = dayjs(project?.created).locale('ru').format('DD/MM/YYYY, hh:mm')

  const isDraft = type === 'draft'
  const isActive = type === 'active'
  const isClosed = type === 'closed'
  const onModeration = type === 'moderation'

  const deleteTrack = async () => {
    
  }
  
  const confirmDeleteModal = () => openConfirmModal({
    title: 'Подтверждение действия',
    children: (
      <p>Вы действительно хотите удалить проект?</p>
    ),
    centered: true,
    labels: {confirm: 'Да', cancel: 'Отменить'},
    onConfirm: () => deleteTrack()
  }) 

  const [preview, setPreview] = React.useState(false)

  return (
    <>
      <div
        key={project?.id}
        className={(clsx(className, 'flex flex-col lg:flex-row bg-white border border-slate-200 rounded'))}
        {...props}
      >
        <div>
          <Image 
            obj={project}
            placeholder='lg:w-[370px] h-full object-cover bg-slate-200 mb-1 lg:mb-0'
            className='lg:w-[370px] h-full object-cover mb-1 lg:mb-0'
          />
          {/* {project?.image
            ? <img src={project?.image} className='aspect-video lg:w-[370px] h-full object-cover mb-1 lg:mb-0' alt="" />
            : <div className='aspect-video lg:w-[370px] h-full object-cover bg-slate-200 mb-1 lg:mb-0'></div>
          } */}
        </div>
        <div className='p-3 md:p-4 flex-1 flex flex-col justify-between gap-y-4'>
          <div className='flex flex-col md:flex-row gap-y-4 items-start gap-x-4'>
            {isDraft && <Tag title='Черновик' type='draft'/>}
            {isActive && <Tag title='Идет сбор' type='active'/>}
            {isClosed && <Tag title='Завершен' type='closed'/>}
            {(isDraft || onModeration)  && (
              <Button
                variant='subtle'
                compact
                classNames={{
                  label: 'underline',
                  leftIcon: 'text-lg',
                  root: 'px-0 md:px-2'
                }}

                leftIcon={<BsEye />}
                onClick={() => setPreview(true)}
              >
                Прелпросмотр
              </Button>
            )}
            {(isActive || isClosed) && (
              <Button
                variant='subtle'
                compact
                classNames={{
                  label: 'underline',
                  leftIcon: 'text-lg',
                  root: 'px-0 md:px-2'
                }}
                leftIcon={<BsEye />}
                // onClick={confirmDeleteModal}
              >
                Перейти
              </Button>

            )}
            {!isClosed && (
              <Button
                variant='subtle'
                compact
                classNames={{
                  label: 'underline',
                  leftIcon: 'text-lg',
                  root: 'px-0 md:px-2'
                }}
                leftIcon={<FiEdit />}
                component={Link}
                to={`/project/${project?.id}/edit`}
              >
                Редактировать
              </Button>
            )}
            {!isActive ?
              <Button
                color={'red'}
                variant='subtle'
                compact
                classNames={{
                  label: 'underline',
                  leftIcon: 'text-lg',
                  root: 'px-0 md:px-2'
                }}
                leftIcon={<RiDeleteBin6Fill />}
                onClick={confirmDeleteModal}
              >
                Удалить
              </Button>
              :
              <Button
                disabled={isActive}
                compact
              >
                Запустить
              </Button>
            }
          </div>
          <div className='flex gap-x-4 justify-between'>
            <div className='flex flex-col gap-y-2'>
              <b className='text-xl'>
                {project?.title
                  ? project?.title
                  : <Link to={`/project/${project?.id}/edit`} className='link'>Добавить название</Link>}
              </b>
              <p className='text-slate-500'>
                {project?.description
                  ? project?.description
                  : <Link to={`/project/${project?.id}/edit`} className='link'>Добавить описание</Link>}
              </p>
              <time className='text-sm'>
                {createdAt}
              </time>
            </div>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-4 justify-between items-center gap-4'>
            <div className='shadow p-2'>
              <p className='font-light text-[10px] lg:text-xs uppercase tracking-wide text-center'>Вознаграждений</p>
              <p className='font-bold text-lg md:text-xl text-center'>{project?.rewards?.length ?? 0}</p>
            </div>
            <div className='shadow p-2'>
              <p className='font-light text-[10px] lg:text-xs uppercase tracking-wide text-center'>Собрано</p>
              <p className='font-bold text-lg md:text-xl text-center'>{project?.earned ?? 0}</p>
            </div>
            <div className='shadow p-2'>
              <p className='font-light text-[10px] lg:text-xs uppercase tracking-wide text-center'>Приобретено</p>
              <p className='font-bold text-lg md:text-xl text-center'>{project?.backed ?? 0}</p>
            </div>
            <div className='shadow p-2'>
              <p className='font-light text-[10px] lg:text-xs uppercase tracking-wide text-center'>Комментариев</p>
              <p className='font-bold text-lg md:text-xl text-center'>{project?.comments ?? 0}</p>
            </div>
          </div>
        </div>
      </div>
      <PreviewProjectModal 
        preview={preview} 
        setPreview={setPreview} 
        project={project} 
      />
    </>
  )
}

export default Pillar