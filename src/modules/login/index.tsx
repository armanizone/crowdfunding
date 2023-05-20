import React from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ForgotPassword from './components/ForgotPassword'

export const styles = {
  form: 'flex flex-col gap-y-4 w-[minmax(290px_350px)]',
  error: 'text-red-500 text-sm mt-4',
  input: 'w-full rounded-md',
}

function AuthForm() {

  const [current, setCurrent] = React.useState("login")

  return (
    <>
      {(current === "login") && <Login setCurrent={setCurrent}/>}
      {(current === "signup") && <SignUp setCurrent={setCurrent}/>}
      {(current === "forgot") && <ForgotPassword setCurrent={setCurrent}/>}
    </>
  )
}

export default AuthForm

