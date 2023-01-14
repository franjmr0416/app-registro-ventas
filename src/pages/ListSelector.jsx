import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ListDynamic from '../layouts/ListDynamic'

const ListSelector = (props) => {
  const {
    type,
    setOnSelect,
    setCurretVentaState,
    currentVentaState,
    setCurrentCarrito,
    currentCarrito,
  } = props
  //const { type } = useParams()
  const [selectedItem, setSelectedItem] = useState(0)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex flex-col p-4'>
        {type == 'cliente' ? (
          <ListDynamic
            table={'Clientes'}
            placeholder='Nombre'
            textLabel='Selecciona cliente'
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            setOnSelect={setOnSelect}
            currentVentaState={currentVentaState}
            setCurretVentaState={setCurretVentaState}
          />
        ) : null}
        {type == 'producto' ? (
          <ListDynamic
            table={'Productos'}
            placeholder={'Producto'}
            textLabel={'Selecciona producto'}
            isCountable
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            setOnSelect={setOnSelect}
            quantity={quantity}
            setQuantity={setQuantity}
            setCurrentCarrito={setCurrentCarrito}
            currentCarrito={currentCarrito}
          />
        ) : null}
      </div>
    </div>
  )
}
export default ListSelector
