import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../services/supabaseClient'
import Badge from '../components/Badge'
import { currencyFormatter, dateFormatter } from '../services/formatter'
import { FaArrowLeft } from 'react-icons/fa'

const VentaDetalle = () => {
  const { id } = useParams()
  const [venta, setVenta] = useState({})

  const getVenta = async () => {
    let { data, error } = await supabase
      .from('Ventas')
      .select(
        `id, fecha_creacion, total, status, Clientes(nombre), Ventas-Productos(cantidad), Productos(nombre, descripcion, precio_venta)`
      )
      .eq('id', id)

    setVenta(data[0])
    console.log(venta)
  }

  useEffect(() => {
    getVenta()
  }, [venta])

  return (
    <div>
      <nav className='shadow-lg p-4 flex items-center'>
        <Link to={'/'}>
          <FaArrowLeft className='text-2xl text-gray-400' />
        </Link>
        <span className='text-lg ml-2'>Compras</span>
      </nav>
      <div className='flex flex-col p-4'>
        <div className='flex justify-between py-2'>
          <p className='font-semibold text-lg'>#Pedido: {venta.id}</p>
          <Badge status={venta.status} />
        </div>
      </div>
    </div>
  )
}
export default VentaDetalle
/*
  
    
      <div className='flex justify-between'>
        <p className='text-gray-600'>Fecha:</p>
        {dateFormatter(venta.fecha_creacion)}
      </div>
      <div className='flex justify-between py-1 border-t-2 mt-2'>
        <p className='text-gray-600'>Cliente:</p>
        {venta.Clientes.nombre}
      </div>
      <div className='flex justify-between py-1 border-t-2 mt-2'>
        <p className='text-gray-600'>Productos:</p>
      </div>
      <div className='flex justify-between py-1 border-t-2 mt-2'>
        <p className='text-lg'>Total:</p>
        <span className='font-semibold'>{currencyFormatter(venta.total)}</span>
      </div>  
      
      
*/
