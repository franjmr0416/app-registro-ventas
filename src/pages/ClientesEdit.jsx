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
    nombre: '',
    telefono: null,
    email: null,
    comentario: null,
    avatar_url: null,
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

  const showConfirm = (event) => {
    event.preventDefault()
    if (id == 0) {
      console.log(currentCliente)
      createRegister('Clientes', currentCliente)
      navigate(-1)
    } else {
      console.log(currentCliente)
      updateRegister('Clientes', currentCliente, id)
      navigate(-1)
    }
  }

  return (
    <div>
      <div className='flex flex-col'>
        <Navbar title={'Clientes'} id={id} table={'Clientes'} />
        <FormResponsive
          onSubmit={showConfirm}
          titulo={'Agregar cliente'}
          textoBoton={id == 0 ? 'Registrar' : 'Actualizar'}
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
    </div>
  )
}
export default ClienteEdit
