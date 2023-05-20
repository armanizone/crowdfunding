import React from 'react'
import { Button, FileButton, LoadingOverlay, NumberInput, Select, Textarea, TextInput } from '@mantine/core'
import { styles } from '../index'
import { cities } from '../../../utils/const/db'

import { Card } from '../../../components'
import CreateLabel from '../components/CreateLabel'
import CreateButtons from '../components/CreateButtons'
import Compressor from 'compressorjs'
import useAuth from '../../../hooks/useAuth'
import { projectSchema } from '../../../utils/validation'
import { useDebouncedState } from '@mantine/hooks'

import { useEditProjectContext } from '../context/EditProjectContext'
import ProjectService from '../../../services/ProjectService'
import compress from '../../../utils/compressor'
import url from '../../../utils/url'


function Main() {

  const {project, id} = useEditProjectContext()

  const [proj, setProj] = React.useState(project)

  const {user} = useAuth()

  const [image, setImage] = React.useState<File | null>(null)

  const [previewProj, setPreviewProj] = useDebouncedState(project, 800)

  React.useEffect(() => {
    setProj(project)
  }, [project])

  React.useEffect(() => {
    setPreviewProj(proj)
  }, [proj])

  const handleImage = (e: any) => {
    if (!e) return
    setImage(e)
    setProj({...proj, preview_image: URL.createObjectURL(e)})
  }
  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null, name?: any, val?: any) => {
    if (e?.target) {
      const { name, value } = e.target
      setErrors({ ...errors, [name]: [] })
      if (parseInt(value)) {
        setProj({ ...proj, [name]: parseInt(value) })
        return
      }
      setProj({ ...proj, [name]: value })
      return
    }
    setProj({ ...proj, [name]: val })
    setErrors({ ...errors, [name]: [] })
  }

  const [loading, setLoading] = React.useState({
    save: false,
  })

  const handleLoading = (name: string, value: boolean) => {
    setLoading({ ...loading, [name]: value })
  }

  const yupErrorToErrorObject = (err: any) => {
    const object: any[] = [];
    err.inner.forEach((x: any) => {
      if (x.path !== undefined) {
        object[x.path] = x.errors;
      }
    });
    return setErrors(object);
  }

  const [errors, setErrors] = React.useState<any>({
    title: [],
    description: [],
    image: [],
    city: [],
    goal: [],
    duration: []
  })

  const updateProject = async () => {
    handleLoading('save', true)
    const formData = new FormData()
    formData.append('uid', user?.id!)
    formData.append('title', proj?.title)
    formData.append('description', proj?.description)
    formData.append('city', proj?.city)
    formData.append('duration', proj?.duration)
    formData.append('goal', proj?.goal)
    if (image) formData.append('image', image!)
    
    await projectSchema.validate({
      ...proj
    }, { abortEarly: false })
      .then(async () => {
        await ProjectService.updateProject(id as string, formData)
        .then((e) => {
          console.log(e);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => handleLoading('save', false))
        handleLoading('save', false)
      })
      .catch((err) => {
        yupErrorToErrorObject(err)
        handleLoading('save', false)
      })
  }

  function clearSelectedImage () {
    setImage(null)
    setProj({ ...proj, preview_image: null })
  }

  return (
    <div>
      <div className={styles.row}>
        <div className='wrapper'>
          <LoadingOverlay visible={loading.save} />
          <CreateLabel
            label='Название проекта'
            tooltip='Заголовок который будет представлять ваш проект (обязательное поле)'
            left={50 - proj?.title?.length!}
          >
            <TextInput
              value={proj?.title ?? ''}
              onChange={handleInput}
              classNames={{
                error: styles.error,
              }}
              py={6}
              px={16}
              size='md'
              placeholder="Не более 50 символов"
              type="text"
              name="title"
              required
              variant="unstyled"
              maxLength={50}
              error={errors.title?.[0]}
            />
          </CreateLabel>
          <CreateLabel
            label='Изображение проекта'
            tooltip='Рекомендуемое изображение (16:9)'
          >
            <div className='p-4 flex gap-4'>
              {proj.preview_image ? 
                <img
                  src={proj?.preview_image}
                  alt=""
                  className='w-40 object-contain'
                />
               : 
                proj?.image &&
                <img
                  src={url(proj, proj?.image)}
                  alt=""
                  className='w-40 object-contain'
                />
              }
              <div className='flex flex-col items-start gap-4'>
                {!proj?.preview_image && (
                  <FileButton onChange={handleImage} accept="image/png,image/jpeg" name='image'>
                    {(props) => 
                      <Button  {...props}  compact variant='light'> Загрузить изображение </Button>}
                  </FileButton>
                )}
                {proj?.preview_image && (
                  <Button
                    compact
                    color={'red'}
                    variant='subtle'
                    classNames={{
                      label: 'text-sm underline'
                    }}
                    onClick={clearSelectedImage}
                  >
                    Удалить
                  </Button>
                )}
              </div>
            </div>
          </CreateLabel>
          <CreateLabel
            label='Коротко о проекте'
            left={180 - proj?.description?.length!}
            tooltip='Вкратце опишите что представляет ваш проект (обязательное поле)'
          >
            <Textarea
              name='description'
              value={proj?.description ?? ''}
              onChange={handleInput}
              placeholder='Коротко о проекте'
              required
              py={6}
              px={16}
              variant='unstyled'
              classNames={{
                input: `${styles.textarea} h-32`
              }}
              maxLength={180}
              error={errors.description?.[0]}
            />
          </CreateLabel>
          <CreateLabel
            label='Город проекта'
            tooltip='Укажите город реализации проекта'
          >
            <Select
              searchable
              clearable
              placeholder='Введите город'
              name="city"
              value={proj?.city}
              onChange={(e) => setProj({ ...proj, city: e })}
              data={cities}
              py={6}
              px={16}
              variant='unstyled'
              classNames={{
                item: 'text-sm'
              }}
              error={errors.city?.[0]}
            // disabled={posted}
            />
          </CreateLabel>
          <CreateLabel
            label='Сумма сбора'
            tooltip='Сумма которую необходимо достичь за время длительности проекта (обязательное поле)'
          >
            <TextInput
              placeholder='100 000'
              type='number'
              name="goal"
              value={proj?.goal ?? ''}
              onChange={handleInput}
              py={6}
              px={16}
              required
              variant='unstyled'
              error={errors.goal?.[0]}
            // disabled={posted}
            />
          </CreateLabel>
          <CreateLabel
            label='Длительность проекта'
            tooltip='Длительность указана в днях (минимум 15, максимум 120 дней)'
            className='border-b'
          >
            <NumberInput
              placeholder='Количество дней после запуска проекта'
              name="duration"
              value={proj?.duration ?? 15}
              onChange={(e) => handleInput(null, 'duration', e)}
              py={6}
              px={16}
              required
              variant="unstyled"
              error={errors.duration?.[0]}
              hideControls
            // disabled={posted}
            />
          </CreateLabel>
        </div>
        <div className='wrapper'>
          <Card
            type='preview'
            project={previewProj}
          />
        </div>
      </div>
      <CreateButtons
        loading={loading.save}
        forward='details'
        callback={updateProject}
        project={proj}
      />
    </div>
  )
}

export default Main