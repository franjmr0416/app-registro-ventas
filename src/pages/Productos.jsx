import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { supabase } from '../services/supabaseClient'
import { Link } from 'react-router-dom'
import { FaBox } from 'react-icons/fa'
import { currencyFormatter } from '../services/formatter'

const Productos = () => {
  const [productos, setProductos] = useState([])

  const getProductos = async () => {
    let { data, error } = await supabase.from('Productos').select()
    setProductos(data)
  }

  useEffect(() => {
    getProductos()
  }, [productos])

  return (
    <div className='flex flex-col'>
      <Navbar title='Opciones' routeAdd='options' btnText={'Agregar'} />
      <div className='flex flex-col p-4 bg-gray-200 h-screen'>
        {productos.map((x) => {
          return (
            <Link key={x.id} to={`productos/${x.id}`}>
              <div className='flex items-center justify-between shadow rounded-lg p-4 mb-2 bg-white'>
                <div className='flex'>
                  <FaBox className='text-xl text-indigo-700' />
                  <span className='ml-2'>{x.nombre}</span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-gray-500'>
                    {currencyFormatter(x.precio_venta)}
                  </span>
                  <span className='text-gray-500'>Stock: {x.stock}</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default Productos
