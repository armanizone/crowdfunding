import { Button, PasswordInput, TextInput } from "@mantine/core"
import { styles } from "../index"
import { useForm, Controller } from 'react-hook-form'

function SignUp({ setCurrent }: any): JSX.Element {

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  })

  const onSumbit = (data: any) => console.log(data);

  return (
    <form 
      onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => handleSubmit(onSumbit)}
      className={styles.form}
    >
      <div>
        <Controller
          name="name"
          control={control}
          render={({field}) => (
            <TextInput
              {...field}
              name='name'
              placeholder='Ваше имя'
              className={styles.input}
            />
          )}
        />
 
      </div>
      <div>
        <Controller
          name="name"
          control={control}
          render={({field}) => (
            <TextInput
              name='email'
              placeholder='Ваш email'
              className={styles.input}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="name"
          control={control}
          render={({field}) => (
            <PasswordInput
              name='password'
              placeholder='Пароль'
              className={styles.input}
            />
          )}
        />

      </div>
      <div>
        <Controller
          name="name"
          control={control}
          render={({field}) => (
            <PasswordInput
              name='password_confirmation'
              placeholder='Подтверждение пароля'
              className={styles.input}
            />
          )}
        />
      </div>
 
      <Button
        type='submit'
      >
        Создать аккаунт
      </Button>

      <div className='flex gap-2 justify-center'>
        <p>Уже были у нас?</p>
        <p onClick={() => setCurrent('login')} className='link'>Войти!</p>
      </div>

    </form>
  )
}

export default SignUp