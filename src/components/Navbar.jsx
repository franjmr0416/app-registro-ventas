import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const { title, routeAdd } = props

  return (
    <nav className='shadow-lg p-4 flex justify-between'>
      <div className='flex items-center'>
        <Link to={'/'}>
          <FaArrowLeft className='text-2xl text-gray-400' />
        </Link>
        <span className='text-lg ml-2'>{title ? title : 'Atras'}</span>
      </div>
      {routeAdd ? (
        <div>
          <Link to={routeAdd}>
            <button className='text-white bg-indigo-700 hover:bg-indigo-900 px-4 py-1 rounded-lg'>
              Agregar
            </button>
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  )
}
export default Navbar
