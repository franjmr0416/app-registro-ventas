import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { supabase } from '../services/supabaseClient'
import { Link } from 'react-router-dom'
import { FaIdCard } from 'react-icons/fa'

const Clientes = () => {
  const [clientes, setClientes] = useState([])

  const getClientes = async () => {
    let { data, error } = await supabase.from('Clientes').select()
    setClientes(data)
  }

  useEffect(() => {
    getClientes()
  }, [clientes])

  return (
    <div className='flex flex-col'>
      <Navbar title='Opciones' routeAdd='upsert/0' />
      <div className='flex flex-col p-4 bg-gray-200 h-screen'>
        {clientes.map((x) => {
          return (
            <Link to={`upsert/${x.id}`}>
              <div
                key={x.id}
                className='flex items-center shadow rounded-lg p-4 mb-2 bg-white'
              >
                <FaIdCard className='text-xl text-indigo-700' />
                <span className='ml-2'>{x.nombre}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default Clientes
