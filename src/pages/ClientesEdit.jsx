import { useState } from 'react'
import { redirect, useParams } from 'react-router-dom'
import { createRegister } from '../services/crud'
import FormControl from '../components/FormControl'
import Navbar from '../components/Navbar'
import FormResponsive from '../layouts/FormResponsive'

const ClienteEdit = () => {
  const { id } = useParams()
  const [datos, setDatos] = useState({
    nombre: '',
    telefono: '',
    email: '',
    comentario: '',
    avatar_url: '',
  })

  const handleInputChange = (event) => {
    setDatos({ ...datos, [event.target.name]: event.target.value })
    console.log(datos)
  }

  const enviarDatos = (event) => {
    event.preventDefault()
    createRegister('Clientes', datos)
    //return redirect('/')
  }

  return (
    <div className='flex flex-col'>
      <Navbar title={'Clientes'} />
      <FormResponsive
        onSubmit={enviarDatos}
        titulo={'Agregar cliente'}
        textoBoton={'Registrar'}
      >
        <FormControl
          label={'Nombre'}
          type={'text'}
          required
          placeholder='Nombre'
          name='nombre'
          onChange={handleInputChange}
        />
        <FormControl
          label={'Teléfono'}
          type={'tel'}
          placeholder='123-444-5566'
          name='telefono'
          onChange={handleInputChange}
        />
        <FormControl
          label={'Email'}
          type={'email'}
          placeholder='correo@email.com'
          name='email'
          onChange={handleInputChange}
        />
        <FormControl
          label={'Comentario'}
          type={'text'}
          placeholder='Comentario'
          name='comentario'
          onChange={handleInputChange}
        />
      </FormResponsive>
    </div>
  )
}
export default ClienteEdit
