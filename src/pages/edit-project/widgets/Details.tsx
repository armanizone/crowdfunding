import React from 'react'
import { Button, LoadingOverlay } from '@mantine/core'

import CreateLabel from '../components/CreateLabel'
import CreateButtons from '../components/CreateButtons'


import { randomId } from '@mantine/hooks'
import Compressor from 'compressorjs';
import { useEditProjectContext } from '../context/EditProjectContext'
import ProjectService from '../../../services/ProjectService';

// import { RichTextEditor } from '@mantine/rte';
import pb from '../../../lib/pb'
import useAuth from '../../../hooks/useAuth'
import url from '../../../utils/url'
import { flushSync } from 'react-dom'

function Details() {

  const { id, project } = useEditProjectContext()

  const { user } = useAuth()

  const details = project?.detail_description

  const [value, setValue] = React.useState(details ?? '');

  React.useLayoutEffect(() => {
    setValue(details)
  }, [details])

  const [loading, setLoading] = React.useState({
    layout: false,
    save: false,
  })

  const handleLoading = (name: string, value: boolean) => {
    setLoading({ ...loading, [name]: value })
  }

  const handleImageUpload = React.useCallback(
    (file: File): Promise<string> =>
      new Promise(async (resolve, reject) => {
        const formData = new FormData();
        formData.append('detail_images', file);
        formData.append('uid', user?.id!);
        await pb.collection('projects').update(id as string, formData)
          .then((res) => {
            flushSync(() => {
              resolve(url(res, res.detail_images?.slice(-1)))
            })
          })
          .catch(() => reject(new Error('Upload failed')));
      }),
    []
  );

  async function updateProject () {
    handleLoading('save', true)
    ProjectService.updateProject(id as string, {
      uid: user?.id!,
      detail_description: value
    })
    .then(e => {
      console.log(e);
    })
    .catch(e => {
      console.log(e);
    })
    .finally(() => handleLoading('save', false))
  }

  async function deleteDetailImages () {
    handleLoading('save', true)
    const deletedImages = project?.detail_images?.filter((word: string) => value?.indexOf(word) === -1);

    ProjectService.updateProject(id as string, {
      uid: user?.id!,
      // 'detail_images-': deletedImages
    })
    .then(e => {
      console.log(e);
    })
    .catch(e => {
      console.log(e);
    })
    .finally(() => handleLoading('save', false))
  }

  return (
    <div className=''>
      <LoadingOverlay visible={loading.save} />
      <div className='wrapper'>
        <CreateLabel
          label='Детальное описание'
          description={`Начните с представления себя, своей команды, а также с предыстории проекта. 
            Далее опишите суть и цель проекта, объясните, в чем его уникальность и почему он должен 
            заинтересовать людей. Распишите, на что будут потрачены вложенные пользователями средства.
            Избегайте монотонности изложения, разбивайте текст на абзацы с привлекательными заголовками,
            фото- и видеоматериалами, графическими изображениями и т.п. Совет: по объему текст-описание 
            должен быть примерно наравне с колонкой вознаграждений – идеально, если они заканчиваются на одном уровне.`
          }
          className='border-b'
        >
          {/* <RichTextEditor
            value={value}
            onChange={setValue}
            onImageUpload={handleImageUpload}
            id='rte'
            classNames={{
              root: 'border-0'
            }}
          /> */}
        </CreateLabel>
      </div>
      <CreateButtons 
        loading={loading.save} 
        back='edit' 
        forward='rewards' 
        callback={updateProject}
        project={{...project, detail_description: value}}
      />
    </div>
  )
}

export default Details