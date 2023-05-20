import React, { useState } from 'react'
import FormControl from '../components/FormControl'
import Button from '../components/Button'
import { supabase } from '../services/supabaseClient'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const value = e.currentTarget.value
    const name = e.currentTarget.name
    setCredentials((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    const { error } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    })

    if (error) {
      alert(error.message)
    } else {
      alert('OK')
      navigate('/', { replace: true })
    }
  }

  return (
    <div className='flex flex-col w-full h-screen items-centers p-8 gap-16'>
      <h1 className='font-bold text-4xl'>Login</h1>
      <form onSubmit={handleLogin} className='flex w-full flex-col gap-4'>
        <FormControl
          label={'email'}
          type={'email'}
          name={'email'}
          value={credentials.email}
          onChange={handleChange}
        />
        <FormControl
          label={'password'}
          type={'password'}
          name={'password'}
          value={credentials.password}
          onChange={handleChange}
        />
        <Button type={'submit'} text={'Login'} name={'loginBtn'} />
      </form>
    </div>
  )
}

export default LogIn
