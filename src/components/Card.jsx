import { FaUserAlt } from 'react-icons/fa'

const Card = () => {
  return (
    <div className='flex flex-col mx-2 my-1 p-2 rounded-md shadow-md bg-white'>
      <div className='flex justify-between pb-2'>
        <div className='flex justify-between'>
          <FaUserAlt className='text-3xl' />
          <p className='pl-3'>Nombre Cliente</p>
        </div>
        <div>
          <span className='bg-indigo-100 text-indigo-800 text-sm font-semibold px-2.5 py-0.5 rounded'>
            Status
          </span>
        </div>
      </div>
      <div className='flex justify-between border-t-2 pt-1'>
        <p className='text-gray-500'>26-10-2022</p>
        <span className='text-lg font-semibold'>$250.00</span>
      </div>
    </div>
  )
}
export default Card
