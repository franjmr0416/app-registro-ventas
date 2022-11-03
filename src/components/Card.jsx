import { FaUserAlt } from 'react-icons/fa'
import { currencyFormatter, dateFormatter } from '../services/formatter'
import Badge from './Badge'

const Card = (props) => {
  const { fecha_creacion, total, status, nombre, foto } = props
  return (
    <div className='flex flex-col mx-2 my-1 p-2 rounded-md shadow-md bg-white'>
      <div className='flex justify-between pb-2'>
        <div className='flex justify-between'>
          <FaUserAlt className='text-3xl' />
          <p className='pl-3'>{nombre}</p>
        </div>
        <div>
          <Badge status={status} />
        </div>
      </div>
      <div className='flex justify-between border-t-2 pt-1'>
        <p className='text-gray-500'>{dateFormatter(fecha_creacion)}</p>
        <span className='text-lg font-semibold'>
          {currencyFormatter(total)}
        </span>
      </div>
    </div>
  )
}
export default Card
