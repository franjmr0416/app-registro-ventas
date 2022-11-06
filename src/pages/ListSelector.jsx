import Navbar from '../components/Navbar'

const ListSelector = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex flex-col p-4'></div>
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
