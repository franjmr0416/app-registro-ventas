import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createRegister, updateRegister } from '../services/crud'
import { supabase } from '../services/supabaseClient'
import FormControl from '../components/FormControl'
import Navbar from '../components/Navbar'
import FormResponsive from '../layouts/FormResponsive'

const ClienteEdit = () => {
  const { id } = useParams()
  let navigate = useNavigate()

  const initialClienteState = {
    id: null,
    nombre: '',
    telefono: '',
    email: '',
    comentario: '',
    avatar_url: '',
  }

  const [currentCliente, setCurrentCliente] = useState(initialClienteState)

  const getCliente = async (id) => {
    let { data, error } = await supabase.from('Clientes').select().eq('id', id)

    setCurrentCliente(data[0])
  }

  useEffect(() => {
    if (id != 0) getCliente(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentCliente({ ...currentCliente, [name]: value })
  }

  const enviarDatos = (event) => {
    event.preventDefault()
    if (id == 0) {
      createRegister('Clientes', currentCliente)
    } else {
      console.log(currentCliente)
      updateRegister('Clientes', currentCliente, id)
    }
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
          value={currentCliente.nombre}
          onChange={handleInputChange}
        />
        <FormControl
          label={'Teléfono'}
          type={'tel'}
          placeholder='123-444-5566'
          name='telefono'
          value={currentCliente.telefono}
          onChange={handleInputChange}
        />
        <FormControl
          label={'Email'}
          type={'email'}
          placeholder='correo@email.com'
          name='email'
          value={currentCliente.email}
          onChange={handleInputChange}
        />
        <FormControl
          label={'Comentario'}
          type={'text'}
          placeholder='Comentario'
          name='comentario'
          value={currentCliente.comentario}
          onChange={handleInputChange}
        />
      </FormResponsive>
    </div>
  )
}
export default ClienteEdit
