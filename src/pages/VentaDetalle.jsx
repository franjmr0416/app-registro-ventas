import PageContainer from '../layouts/PageContainer'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../services/supabaseClient'

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
    <div className='flex flex-col p-4'>
      <p>#Pedido: {venta.id}</p>
      <span>{venta.status}</span>
      <p>Fecha: {venta.fecha_creacion}</p>
    </div>
  )
}
export default VentaDetalle
