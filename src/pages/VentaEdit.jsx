import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import FormControl from '../components/FormControl'
import Navbar from '../components/Navbar'

const VentaEdit = () => {
  const { id } = useParams()

  return (
    <div className='flex flex-col'>
      <Navbar title={'Detalle'} />
      <div className='p-4 flex w-full justify-center'>
        <div className='flex flex-col w-full lg:w-1/4'>
          <h2 className='font-semibold text-xl mb-4'>Agregar Cliente</h2>
          <form>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-1'>
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
            </div>
            <div className='mt-6 flex justify-center'>
              <Button type='submit' text='Registrar' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default VentaEdit
