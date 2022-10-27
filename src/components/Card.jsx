import { FaUserAlt } from 'react-icons/fa'

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
          <span
            className={`${
              status == 'Sin pagar'
                ? 'bg-red-100 text-red-800'
                : 'bg-indigo-100 text-indigo-800'
            } text-sm font-semibold px-2.5 py-0.5 rounded`}
          >
            {status}
          </span>
        </div>
      </div>
      <div className='flex justify-between border-t-2 pt-1'>
        <p className='text-gray-500'>{fecha_creacion}</p>
        <span className='text-lg font-semibold'>${total}</span>
      </div>
    </div>
  )
}
export default Card
