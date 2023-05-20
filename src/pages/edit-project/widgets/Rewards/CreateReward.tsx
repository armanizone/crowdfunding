import React from 'react'
import { Button, Checkbox, FileButton, LoadingOverlay, Overlay, Textarea, TextInput } from '@mantine/core'
import useAuth from '../../../../hooks/useAuth'
import { randomId } from '@mantine/hooks'
import { rewardSchema } from '../../../../utils/validation'
import { showNotification } from '@mantine/notifications'

import { styles } from '../../index'
import { DatePicker } from '@mantine/dates'

import 'dayjs/locale/ru';
import { useEditProjectContext } from '../../context/EditProjectContext'
import CreateLabel from '../../components/CreateLabel'
import RewardService from '../../../../services/RewardService'

function CreateReward({ handleReward }: any) {

  const { user } = useAuth()

  const { project, id, refetch } = useEditProjectContext()

  const [image, setImage] = React.useState<File | null>(null)

  const [loading, setLoading] = React.useState(false)

  const handleImage = (e: File) => {
    if (!e) return
    setImage(e)
    setReward({ ...reward, image: URL.createObjectURL(e)})
    handleReward('image', URL.createObjectURL(e))
  }

  const [reward, setReward] = React.useState<any>({
    title: '',
    description: '',
    how_to_get: '',
    image: '',
    cost: 0,
    count: 0,
    bought: 0,
    sending: new Date(),
  })

  const [errors, setErrors] = React.useState<any>({
    title: [],
    description: [],
    how_to_get: [],
    image: [],
    cost: [],
    count: [],
    bought: [],
  })

  const [infinite, setInfinite] = React.useState(false)

  const handleInfinite = () => {
    setInfinite(q => !q)
    setErrors({ ...errors, count: []})
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name?: any, val?: string) => {
    if (e.target) {
      const { name, value } = e.target
      if (parseInt(value) && (name === 'cost' || name === 'count')) {
        setReward({ ...reward, [name]: parseInt(value) })
        handleReward(name, parseInt(value))
        return
      }
      setReward({ ...reward, [name]: value })
      setErrors({ ...errors, [name]: [] })
      handleReward(name, value)
      return
    }
    setReward({ ...reward, [name]: val })
    setErrors({ ...errors, [name]: [] })
    handleReward(name, val)
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

  const formData = new FormData()
  formData.append('image', image!)
  formData.append('user', user?.id!)
  formData.append('uid', user?.id!)
  formData.append('project', id!)

  const createReward = async () => {

    await refetch()
    .then(async (e: any) => {
      await RewardService.createReward(e.data, formData)
      .then(e => {
        console.log(e);
      })
      .catch(err => {
        console.log(err);
      })
    })
  }

  return (
    <div className='wrapper'>
      <LoadingOverlay visible={loading} />
      <div className='mb-4'>
        <h2 className='text-lg md:text-xl mb-2'>
          Добавьте вознаграждения в проект
        </h2>
        <p>
          Определяясь с типом вознаграждений, отталкивайтесь от того, что было бы приятно получить лично вам. Кроме того, среди
          бонусов должен быть и сам результат проекта - то, на что собираются денежные средства. И помните:
          большинство людей поддерживают проекты именно из желания получить интересные бонусы.
        </p>
      </div>
      <CreateLabel 
        label='Название вознаграждения'
        left={70 - reward?.title?.length!}
      >
        <TextInput
          value={reward.title ?? ''}
          onChange={handleInput}
          name="title"
          classNames={{
            error: styles.error,
          }}
          py={6}
          px={16}
          size='md'
          placeholder="Не более 50 символов"
          required
          variant="unstyled"
          maxLength={70}
          error={errors.title?.[0]}
        />
      </CreateLabel>
      <CreateLabel label='Картинка'>
        <div className='p-4'>
        <FileButton onChange={handleImage} accept="image/png,image/jpeg">
          {(props) => 
            <Button  {...props}  compact variant='light'> Загрузить изображение </Button>}
        </FileButton>
        </div>
      </CreateLabel>
      <CreateLabel 
        label='Описание вознаграждения'
        left={500 - reward?.description?.length!}
      >
        <Textarea
          value={reward.description ?? ''}
          onChange={handleInput}
          name='description'
          style={{ border: 'none' }}
          classNames={{
            input: 'h-48'
          }}
          size='md'
          placeholder='Описание вознаграждение'
          required
          variant='unstyled'
          py={6}
          px={16}
          maxLength={500}
          error={errors.description?.[0]}
        />
      </CreateLabel>
      <CreateLabel 
        label='Способы получения'
        left={240 - (reward?.how_to_get?.length!)}
      >
        <Textarea
          classNames={{
            error: styles.error,
            input: 'h-24'
          }}
          value={reward.how_to_get ?? ''}
          onChange={handleInput}
          name='how_to_get'
          py={6}
          px={16}
          size='md'
          placeholder='Как получить вашего вознаграждение'
          required
          variant='unstyled'
          maxLength={240}
        />
      </CreateLabel>
      <CreateLabel label='Цена вознаграждения'>
        <TextInput
          value={reward.cost ?? 0}
          onChange={handleInput}
          name='cost'
          classNames={{
            error: styles.error,
          }}
          py={6}
          px={16}
          size='md'
          placeholder=""
          required
          variant="unstyled"
          error={errors.cost?.[0]}
        />
      </CreateLabel>
      <CreateLabel label='Количество'>
        <div className='flex justify-between'>
          <div className='relative flex-1'>
            <TextInput
              value={reward.count ?? 0}
              onChange={handleInput}
              name='count'
              classNames={{
                error: styles.error,
              }}
              py={6}
              px={16}
              size='md'
              placeholder="Не более 50 символов"
              required
              variant="unstyled"
              error={errors.count?.[0]}
            />
            {infinite && (
              <Overlay />
            )}
          </div>
          <Checkbox
            py={6}
            px={16}
            label='Не ограничено'
            classNames={{ label: 'font-semibold' }}
            className='flex-1 border-l border-slate-200'
            onChange={handleInfinite}
          />
        </div>
      </CreateLabel>
      <CreateLabel label='Примерная дата доставки'
        className='border-b'
      >
        <DatePicker
          value={reward.sending ?? new Date()}
          onChange={(e) => setReward({ ...reward, sending: e! })}
          name='sending'
          classNames={{
            error: styles.error,
          }}
          py={6}
          px={16}
          size='md'
          placeholder="Не более 50 символов"
          required
          variant="unstyled"
          locale="ru"
        />
      </CreateLabel>
      <div className='flex justify-center mt-4'>
        <Button
          size='md'
          onClick={createReward}
        >
          Добавить вознаграждение
        </Button>
      </div>
    </div>
  )
}

export default CreateReward