import React from 'react'
import { loginSchema, merged } from "../utils/validation"


export type FormChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLButtonElement | HTMLFormElement>

export interface SubmitProps {
  register: (e: FormChangeEvent) => void,
  login: (e: FormChangeEvent) => void,
  loginWithGoogle: (e: FormChangeEvent) => void,
  singout: (e: FormChangeEvent) => void,
}

interface ErrorsProps {
  name: string[],
  email: string[],
  password: string[],
  password_confirmation: string[],
  other: string[],
}

export interface FormProps {
  setCurrent: (name: string) => void,
}

export default function useForm() {

  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    stay: false
  })

  const [errors, setErrors] = React.useState<ErrorsProps | any>({
    name: [],
    email: [],
    password: [],
    password_confirmation: [],
    other: [],
  })

  const [loading, setLoading] = React.useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: [], other: [] })
  }

  const yupErrorToErrorObject = (err: any) => {
    const object:any [] = [];
    err.inner.forEach((x: any) => {
      if (x.path !== undefined) {
        object[x.path] = x.errors;
      }
    });
    return setErrors(object);
  }

  const handleSubmit = {
    register: (event: FormChangeEvent) => {},
    login: async (event: FormChangeEvent) => {},
    // loginWithGoogle: async (event: FormChangeEvent) => {
    //   event.preventDefault();
    //   setErrors({})
    //   setLoading(true)
    // },
    resetPassword: async (event: FormChangeEvent) => {
      event.preventDefault();
      setErrors({})
      setLoading(true)
    },
    singout: (event: FormChangeEvent) => {
      event.preventDefault();
    }
  }

  return {
    values,
    handleInputChange,
    handleSubmit,
    errors,
    loading,
    setErrors,
  }
}