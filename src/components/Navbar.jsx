import { FaArrowLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import ButtonDelete from '../components/ButtonDelete'

const Navbar = (props) => {
  const { title, routeAdd, btnText, id, table } = props
  const navigate = useNavigate()

  return (
    <nav className='shadow-lg p-4 flex justify-between bg-white'>
      <div className='flex items-center'>
        <div onClick={() => navigate(-1)}>
          <FaArrowLeft className='text-2xl text-gray-400' />
        </div>
        <span className='text-lg ml-2'>{title ? title : 'Atras'}</span>
      </div>
      {routeAdd ? (
        <div>
          <Link to={routeAdd}>
            <button className='text-white bg-indigo-700 hover:bg-indigo-900 px-4 py-1 rounded-lg'>
              {btnText}
            </button>
          </Link>
        </div>
      ) : (
        <div></div>
      )}
      {id && id != 0 ? <ButtonDelete table={table} id={id} /> : ''}
    </nav>
  )
}
export default Navbar
