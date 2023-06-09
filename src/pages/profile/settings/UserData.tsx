import React from 'react'
import { Button, Select, Textarea, TextInput } from '@mantine/core'
import { Load } from '../../../components'
import { cities } from '../../../utils/const/db'

import { userSchema } from '../../../utils/validation'
import Compressor from 'compressorjs'
import Heading from '../components/Heading'

export const styles = {
  label: 'text-slate-400 uppercase text-xs'
}

function UserData(): JSX.Element {

  // React.useEffect(() => {
  //   setProfile({
  //     displayName: user?.displayName ?? '',
  //     bio: data?.bio ?? '',
  //     phoneNumber: data?.phoneNumber ?? '',
  //     city: data?.city ?? '',
  //     site: data?.site ?? '',
  //     instagram: data?.instagram ?? '',
  //     telegram: data?.telegram ?? '',
  //     photoURL: user?.photoURL ?? null,
  //   })
  //   // eslint-disable-next-line
  // }, [loadd])

  const [image, setImage] = React.useState<File | null>(null)

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return 
    setImage(e.target.files[0])
    setProfile({...profile, photoURL: URL.createObjectURL(e.target.files[0])})
  }

  const [profile, setProfile] = React.useState<any>({
    displayName: '',
    photoURL: null,
    bio: '',
    phoneNumber: '',
    city: '',
    site: '',
    instagram: '',
    telegram: '',
  })

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name?: any, val?: string) => {
    if (e.target) {
      const { name, value } = e.target
      if (parseInt(value)) return setProfile({...profile, [name]: parseInt(value) })
      setProfile({ ...profile, [name]: value})
      setErrors({...errors, [name]: []})
      return
    } 
    setProfile({...profile, [name]: val})
    setErrors({...errors, [name]: []})
  }

  const [loading, setLoading] = React.useState(false)

  const [errors, setErrors] = React.useState<any>({
    displayName: [],
    phoneNumber: [],
    city: [],
    site: [],
    instagram: [],
    telegram: [],
    photoURL: [],
  })

  const yupErrorToErrorObject = (err: any) => {
    const object: any[] = [];
    err.inner.forEach((x: any) => {
      if (x.path !== undefined) {
        object[x.path] = x.errors;
      }
    });
    return setErrors(object);
  }

  const updateProfileData = async (url?: string) => {

  }

  const update = async () => {
    // setLoading(true)
    // if (image) {
    //   const path = `/users/${user?.email}/${image.name}`
    //   new Compressor (image, {
    //     quality: 0.6,
    //     async success(file) {
    //       uploadImage(path, image)
    //       .then(async () => {
    //         await getImage(path)
    //         .then(async e => {
    //           await userSchema.validate({
    //             displayName: profile.displayName,
    //           }, {abortEarly: false})
    //           .then(async () => {
    //             await updateProfileData(e)
    //             setLoading(false)
    //           })
    //           .catch((err) => {
    //             yupErrorToErrorObject(err)
    //             setLoading(false)
    //           })
    //         })
    //       })
    //       .catch(e => {
    //         setLoading(false)
    //       })
    //     },
    //   })
    //   return
    // }
    // if (profile.phoneNumber.length !== 0) {
    //   await userSchema.validate({
    //     displayName: profile.displayName,
    //     phoneNumber: profile.phoneNumber
    //   }, { abortEarly: false })
    //   .then(async () => {
    //     await updateProfileData()
    //   })
    //   .catch(err => {
    //     yupErrorToErrorObject(err)
    //   })
    //   .finally(() => {
    //     setLoading(false)
    //   })
    //   return
    // }
    // await userSchema.validate({
    //   displayName: profile.displayName,
    // }, { abortEarly: false })
    // .then(async () => {
    //   await updateProfileData()
    // })
    // .catch(err => {
    //   yupErrorToErrorObject(err)
    // })
    // .finally(() => {
    //   setLoading(false)
    // })
  }

  if (false) return <Load/>

  return (
    <div className='w-full h-full relative'>
      <Heading title='Настройки' description='Ваши настройки' />
      <div className='mt-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl'>
          <TextInput
            label='Имя'
            name='displayName'
            placeholder='Имя'
            classNames={{
              label: styles.label
            }}
            value={profile.displayName}
            onChange={handleInput}
            error={errors?.displayName?.[0]}
          />
          <TextInput
            label='Контактный телефон'
            name='phoneNumber'
            placeholder='Телефон'
            classNames={{
              label: styles.label
            }}
            value={profile.phoneNumber}
            onChange={handleInput}
            error={errors?.phoneNumber?.[0]}
          />
          <Select
            data={cities}
            label='Город'
            name='city'
            placeholder='Город'
            clearable
            searchable
            classNames={{
              label: styles.label
            }}
            value={profile.city}
            onChange={(e) => setProfile({...profile, city: e!})}
          />
          <TextInput
            label='Сайт'
            name='site'
            placeholder='Адрес вашего сайт'
            classNames={{
              label: styles.label
            }}
            value={profile.site}
            onChange={handleInput}
          />
          <TextInput
            label='Instagram'
            name='instagram'
            classNames={{
              label: styles.label
            }}
            value={profile.instagram}
            onChange={handleInput}
          />
          <TextInput
            label='Telegram'
            name='telegram'
            classNames={{
              label: styles.label
            }}
            value={profile.telegram}
            onChange={handleInput}
          />

        </div>
        <div className='flex flex-col-reverse sm:flex-row gap-x-4 max-w-2xl mt-4'>
          <div className='w-32 mx-auto mt-4 mb-2 sm:mt-0'>
            <div className={`${styles.label} font-semibold leading-4 mb-0.5`}>Фотография</div>
            <img
              src={profile.photoURL ?? ' ' ?? 'https://s7.planeta.ru/p?url=https%3A%2F%2Fstatic.planeta.ru%2Fimages%2Favatars%2Fava-u-03.jpg&width=150&height=150&crop=true&pad=false&disableAnimatedGif=true'}
              alt=""
              className='h-32'
            />
            <div className='flex'>
              {/* <FileInput
                label='Изменить'
                buttonProps={{
                  compact: true,
                  size: 'xs', 
                  variant: 'subtle'
                }}
                onChange={handleImage}
              /> */}
              <Button 
                compact 
                size='xs' 
                variant='subtle'
                onClick={() => {
                  setImage(null)
                  setProfile({...profile, photoURL: ''})
                }}
              >
                Удалить
              </Button>
            </div>
          </div>
          <Textarea
            label='О себе'
            placeholder='Расскажите немного о себе'
            className='-mt-2 w-auto flex-1'
            classNames={{
              label: styles.label,
              input: 'h-32'
            }}
            name='bio'
            value={profile.bio}
            onChange={handleInput}
          />
        </div>
        <div className='flex justify-end mt-4 max-w-2xl'>
          <Button
            size='md'
            onClick={update}
            loading={loading}
          >
            Сохранить изменения
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UserData