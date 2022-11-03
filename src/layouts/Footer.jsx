import {
  FaCashRegister,
  FaPlusCircle,
  FaChartLine,
  FaBars,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  const { isActive } = props
  return (
    <div className='h-16 justify-evenly bg-white py-2 fixed flex inset-x-0 bottom-0 visible lg:invisible border-t-2'>
      <div>
        <Link to={'/'}>
          <FaCashRegister
            className={`text-3xl mx-auto ${
              isActive == 'ventas' ? 'text-indigo-400' : ''
            }`}
          />
        </Link>
        <p className='text-xs'>Ventas</p>
      </div>
      <div>
        <FaChartLine
          className={`text-3xl mx-auto ${
            isActive == 'graficos' ? 'text-indigo-400' : ''
          }`}
        />
        <p className='text-xs'>Gráficos</p>
      </div>
      <div>
        <Link to={'options'}>
          <FaBars
            className={`text-3xl mx-auto ${
              isActive == 'opciones' ? 'text-indigo-400' : ''
            }`}
          />
          <p className='text-xs'>Opciones</p>
        </Link>
      </div>
      <div>
        <Link to={`ventaedit/0`}>
          <FaPlusCircle
            className={`text-3xl mx-auto ${
              isActive == 'agregar' ? 'text-indigo-400' : ''
            }`}
          />
          <p className='text-xs'>Agregar</p>
        </Link>
      </div>
    </div>
  )
}
export default Footer
