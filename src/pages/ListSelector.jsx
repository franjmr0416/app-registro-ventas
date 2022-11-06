import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ListDynamic from '../layouts/ListDynamic'

const ListSelector = () => {
  const { type } = useParams()
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex flex-col p-4'>
        {type == 'cliente' ? (
          <ListDynamic
            table={'Clientes'}
            placeholder='Nombre'
            textLabel='Selecciona cliente'
          />
        ) : null}
        {type == 'producto' ? (
          <ListDynamic
            table={'Productos'}
            placeholder={'Producto'}
            textLabel={'Selecciona producto'}
            isCountable
          />
        ) : null}
      </div>
    </div>
  )
}
export default ListSelector
/*
<ListDynamic
            table={'Clientes'}
            placeholder='Nombre'
            textLabel='Selecciona cliente'
          />
          <ListDynamic
            table={'Productos'}
            placeholder={'Producto'}
            textLabel={'Selecciona producto'}
            isCountable
          />
*/
