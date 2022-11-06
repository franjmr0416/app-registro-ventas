import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ListDynamic from '../layouts/ListDynamic'
import { currencyFormatter } from '../services/formatter'

const VentaEdit = () => {
  const { id } = useParams()

  const initialVentaState = {
    fk_cliente: 0,
    nombre_cliente: '',
    fecha_creacion: new Date(),
    observacion: '',
    subtotal: 0.0,
    descuento: 0.0,
    total: 0.0,
    status: 'Sin pagar',
  }

  const [currentVentaState, setCurretVentaState] = useState(initialVentaState)

  const initialVentaProductos = []

  return (
    <div className='bg-gray-200 h-screen'>
      <div className='flex flex-col'>
        <Navbar id={id} table={'Ventas'} />
        <div className='flex flex-col p-4'>
          <div className='flex flex-col p-2 mb-1 bg-white rounded-lg shadow-lg'>
            <span className='font-semibold text-gray-500'>Cliente</span>
            {
              <span className='p-2 border-2 rounded-lg'>
                {currentVentaState.nombre_cliente
                  ? currentVentaState.nombre_cliente
                  : 'Seleccionar cliente'}
              </span>
            }
          </div>
          <div className='flex flex-col p-2 mb-1 bg-white rounded-lg shadow-lg'>
            <div className='flex justify-between items-center'>
              <span className='font-semibold text-gray-500'>Productos</span>
              <button className='bg-indigo-500 text-white px-2 py-1 rounded-lg'>
                Agregar
              </button>
            </div>
          </div>

          <div className='flex flex-col p-2 mb-1 bg-white rounded-lg shadow-lg'>
            <div className='flex items-center justify-between'>
              <span className='font-semibold text-gray-500'>Subtotal:</span>
              <span>{currencyFormatter(currentVentaState.subtotal)}</span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='font-semibold text-gray-500'>Descuento:</span>
              <span>{currencyFormatter(currentVentaState.descuento)}</span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='font-semibold text-gray-500 text-lg'>
                Total:
              </span>
              <span>{currencyFormatter(currentVentaState.total)}</span>
            </div>
          </div>
          <div className='flex justify-between items-center px-2 py-3 mb-1 bg-white rounded-lg shadow-lg'>
            <span className='font-semibold text-gray-500'>
              Marcar como pagado
            </span>
            <label
              for='default-toggle'
              className='inline-flex relative items-center cursor-pointer'
            >
              <input
                type='checkbox'
                value=''
                id='default-toggle'
                className='sr-only peer'
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
            </label>
          </div>
          <div className='text-center bg-indigo-500 text-white font-semibold hover:bg-indigo-800 py-2 rounded-lg shadow-lg shadow-indigo-500/30'>
            Registrar Venta
          </div>
        </div>
      </div>
    </div>
  )
}
export default VentaEdit
