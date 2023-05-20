import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../services/supabaseClient'
import Badge from '../components/Badge'
import { currencyFormatter, dateFormatter } from '../services/formatter'
import Navbar from '../components/Navbar'

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
  }

  useEffect(() => {
    getVenta()
  }, [venta])

  return (
    <div>
      <Navbar
        title={'Ventas'}
        routeAdd={`/ventaedit/${id}`}
        btnText={'Editar'}
      />
      <div className='flex flex-col p-4'>
        <div className='flex justify-between py-2'>
          <p className='font-semibold text-lg'>#Pedido: {venta.id}</p>
          <Badge status={venta.status} />
        </div>
        <div className='flex justify-between'>
          <p className='text-gray-600'>Fecha:</p>
          {dateFormatter(venta.fecha_creacion)}
        </div>
        <div className='flex justify-between py-1 border-t-2 mt-2'>
          <p className='text-gray-600'>Cliente:</p>
          {venta.Clientes?.nombre}
        </div>
        <div className='flex flex-col py-1 border-t-2 mt-2'>
          <p className='text-gray-600'>Productos:</p>
          <div className='grid grid-cols-8'>
            <div className='col-span-1'>
              {venta['Ventas-Productos']?.map((x) => {
                return (
                  <div className='p-2'>
                    <span>{x.cantidad}x</span>
                  </div>
                )
              })}
            </div>
            <div className='col-span-7'>
              {venta.Productos?.map((x) => {
                return (
                  <div className='flex justify-between py-2'>
                    <span>{x.nombre}</span>
                    <span>{currencyFormatter(x.precio_venta)}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className='flex justify-between py-1 border-t-2 mt-2'>
          <p className='text-lg'>Total:</p>
          <span className='font-semibold'>
            {currencyFormatter(venta.total)}
          </span>
        </div>
      </div>
    </div>
  )
}
export default VentaDetalle
