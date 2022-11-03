import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FaIdCard, FaBox } from 'react-icons/fa'
import Footer from '../layouts/Footer'

const Options = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex flex-col p-4 bg-gray-200 h-screen'>
        <Link to={'clientes'}>
          <div className='flex items-center shadow rounded-lg p-4 mb-2 bg-white'>
            <FaIdCard className='text-xl text-indigo-700' />
            <span className='ml-2'>Clientes</span>
          </div>
        </Link>
        <Link to={'productos'}>
          <div className='flex items-center shadow rounded-lg p-4 bg-white'>
            <FaBox className='text-xl text-indigo-700' />
            <span className='ml-2'>Productos</span>
          </div>
        </Link>
      </div>
      <Footer isActive={'opciones'} />
    </div>
  )
}
export default Options
