import {
  FaCashRegister,
  FaPlusCircle,
  FaChartLine,
  FaBars,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex justify-evenly bg-white py-2 sticky inset-x-0 bottom-0 visible lg:invisible h-fit'>
      <div className=''>
        <FaCashRegister className='text-3xl mx-auto text-indigo-400' />
        <p className='text-xs'>Ventas</p>
      </div>
      <div>
        <FaChartLine className='text-3xl mx-auto' />
        <p className='text-xs'>Gráficos</p>
      </div>
      <div>
        <FaBars className='text-3xl mx-auto' />
        <p className='text-xs'>Opciones</p>
      </div>
      <div>
        <FaPlusCircle className='text-3xl mx-auto' />
        <p className='text-xs'>Agregar</p>
      </div>
    </div>
  )
}
export default Footer
