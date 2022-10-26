import {
  FaCashRegister,
  FaPlusCircle,
  FaChartLine,
  FaBars,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex justify-evenly bg-white py-2 sticky inset-x-0 bottom-0 visible lg:invisible'>
      <div className=''>
        <FaCashRegister className='text-3xl text-indigo-400' />
        <p>Ventas</p>
      </div>
      <div>
        <FaChartLine className='text-3xl' />
        <p>Gráficos</p>
      </div>
      <div>
        <FaBars className='text-3xl' />
        <p>Opciones</p>
      </div>
      <div>
        <FaPlusCircle className='text-3xl' />
        <p>Agregar</p>
      </div>
    </div>
  )
}
export default Footer
