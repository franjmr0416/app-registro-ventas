import { FaExclamationTriangle } from 'react-icons/fa'

const Modal = (props) => {
  const { setIsOpen, message, action } = props
  return (
    <div className='z-0 w-screen h-screen top-0 absolute bg-gray-700/20'>
      <div className='flex flex-col justify-center items-center text-center min-h-screen'>
        <div className='flex flex-col bg-white p-4 rounded-lg w-4/5 md:w-60'>
          <div className='flex justify-center pt-4'>
            <FaExclamationTriangle className='text-4xl text-yellow-500' />
          </div>
          <div className='flex justify-center p-4'>
            <span className='text-lg font-semibold text-gray-600'>
              {message}
            </span>
          </div>
          <div className='flex justify-evenly'>
            <button
              className='text-white bg-green-600 rounded-lg px-4 py-2'
              onClick={() => {
                actionState(true)
                setIsOpen(false)
              }}
            >
              Aceptar
            </button>
            <button
              className='text-white bg-red-600 rounded-lg px-4 py-2'
              onClick={() => {
                actionState(false)
                setIsOpen(false)
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal
