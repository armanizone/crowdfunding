import { Aside, Button, PasswordInput, TextInput } from "@mantine/core"
import { styles } from "../index"
import { useForm, Controller } from 'react-hook-form'
import pb from "../../../lib/pb"

function Login ({setCurrent}: any):JSX.Element {
  
  const { control, handleSubmit, } = useForm({
    values: {
      email: '',
      password: ''
    }
  })



  async function onSubmit (data: any) {
    
    await pb.collection('users').authWithPassword(data.email, data.password).then(e => {
      console.log(e);
    })
    .catch(err => {
      console.log({...err});
    })
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <div>
        <Controller
          name="email"
          control={control}
          render={({field}) => (
            <TextInput
              {...field}
              type='email' 
              placeholder='Ваш email'
              className={styles.input}
          /> 
          )}
        /> 
      </div>
      <div>
        <Controller
          name="password"
          control={control}
          render={({field}) => (
            <PasswordInput
              {...field}
              placeholder='Пароль'
              className={styles.input}
            /> 
          )}
        />
      </div>
      <Button
        type='submit' 
      >
        Войти
      </Button>

      <div className='flex gap-2 justify-center'>
        <p>Первый раз тут?</p>
        <p onClick={() => setCurrent('signup')} className='link'>Зарегистрируйтесь!</p>
      </div>
      <div className='text-center'>
        <span className='link' onClick={() => setCurrent('forgot')}>
          Забыли пароль?
        </span>
      </div>

    </form>
  )
}

export default Login