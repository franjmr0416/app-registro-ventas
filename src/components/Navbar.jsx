import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const { title } = props

  return (
    <nav className='shadow-lg p-4 flex items-center'>
      <Link to={'/'}>
        <FaArrowLeft className='text-2xl text-gray-400' />
      </Link>
      <span className='text-lg ml-2'>{title}</span>
    </nav>
  )
}
export default Navbar
