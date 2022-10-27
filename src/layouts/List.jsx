import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { supabase } from '../services/supabaseClient'

const List = () => {
  const [ventas, setVentas] = useState([])

  const getVentas = async () => {
    let { data, error } = await supabase
      .from('Ventas')
      .select(`id, fecha_creacion, total, status, Clientes(nombre, avatar_url)`)

    setVentas(data)
  }

  useEffect(() => {
    getVentas()
  }, [ventas])

  return (
    <div className='flex flex-col pt-1'>
      {ventas.map((item) => {
        return (
          <Card
            key={item.id}
            fecha_creacion={item.fecha_creacion}
            total={item.total}
            status={item.status}
            nombre={item.Clientes.nombre}
            foto={item.Clientes.avatar_url}
          />
        )
      })}
    </div>
  )
}
export default List
