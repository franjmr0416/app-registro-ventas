import { useParams } from 'react-router-dom'
import FormControl from '../components/FormControl'
import Navbar from '../components/Navbar'

const VentaEdit = () => {
  const { id } = useParams()

  return (
    <div className='flex flex-col'>
      <Navbar title={'Detalle'} />
      <form>
        <div className='grid gap-6 p-4 md:grid-cols-2'>
          <FormControl
            label={'Nombre'}
            type={'text'}
            required
            placeholder='Nombre'
          />
          <FormControl
            label={'Teléfono'}
            type={'tel'}
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            placeholder='123-444-5566'
          />
          <FormControl
            label={'Email'}
            type={'email'}
            placeholder='correo@email.com'
          />
          <FormControl
            label={'Comentario'}
            type={'text'}
            placeholder='Comentario'
          />
        </div>
      </form>
    </div>
  )
}
export default VentaEdit
