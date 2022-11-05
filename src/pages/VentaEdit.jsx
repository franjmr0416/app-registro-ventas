import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ListDynamic from '../layouts/ListDynamic'

const VentaEdit = () => {
  const { id } = useParams()

  const initialVentaState = {
    fk_cliente: 0,
    fecha_creacion: new Date(),
    observacion: '',
    subtotal: 0.0,
    descuento: 0.0,
    total: 0.0,
    status: 'Sin pagar',
  }

  const [currentVentaState, setCurretVentaState] = useState(initialVentaState)

  return (
    <div className='bg-gray-200 h-screen'>
      <div className='flex flex-col'>
        <Navbar id={id} table={'Ventas'} />
        <div className='flex flex-col p-4'>
          <ListDynamic
            table={'Clientes'}
            placeholder='Nombre'
            textLabel='Cliente'
          />
        </div>
      </div>
    </div>
  )
}
export default VentaEdit
