import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import FormControl from '../components/FormControl'
import Navbar from '../components/Navbar'
import FormResponsive from '../layouts/FormResponsive'

const VentaEdit = () => {
  const { id } = useParams()

  return (
    <div className='flex flex-col'>
      <Navbar title={'Detalle'} />
      <FormResponsive titulo={'Agregar cliente'} textoBoton={'Registrar'}>
        <FormControl
          label={'Nombre'}
          type={'text'}
          required
          placeholder='Nombre'
          name='nombre'
        />
        <FormControl
          label={'Teléfono'}
          type={'tel'}
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
          placeholder='123-444-5566'
          name='telefono'
        />
        <FormControl
          label={'Email'}
          type={'email'}
          placeholder='correo@email.com'
          name='email'
        />
        <FormControl
          label={'Comentario'}
          type={'text'}
          placeholder='Comentario'
          name='comentario'
        />
      </FormResponsive>
    </div>
  )
}
export default VentaEdit
