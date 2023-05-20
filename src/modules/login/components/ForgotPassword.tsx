import { Button, TextInput } from "@mantine/core"
import { useForm, Controller } from "react-hook-form"
import { styles } from "../index"

function ForgotPassword({ setCurrent }: any): JSX.Element {

  const { control, handleSubmit, } = useForm({
    defaultValues: {
      email: ''
    }
  })

  const onSumbit = (data: any) => console.log(data);



  return (
    <form 
      onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => handleSubmit(onSumbit)}
      className={styles.form}  
    >
        <Controller
          name="email"
          control={control}
          render={({field}) => (
            <TextInput
              {...field}
              name='email'
              className={styles.input}
              placeholder='Ваш email'
            />
          )}
        />

      <Button 
        type='submit'
      >
        Восстановить пароль
      </Button>
      <div className='text-center'>
        <span className='link' onClick={() => setCurrent('login')}>
          Назад
        </span>
      </div>
    </form>
  )
}

export default ForgotPassword