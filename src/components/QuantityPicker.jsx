import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'

const QuantityPicker = (props) => {
  const { quantity, setQuantity, setIsOpen } = props

  const validateQuantity = (op) => {
    switch (op) {
      case 'add':
        setQuantity(quantity + 1)
        break
      case 'min':
        quantity == 1 ? null : setQuantity(quantity - 1)
        break

      default:
        break
    }
  }

  return (
    <div className='absolute left-0 top-0 h-full w-full bg-gray-700/70'>
      <div className='absolute left-4 right-4 bottom-0 bg-white rounded-t-lg p-4'>
        <div className='flex flex-col'>
          <div className='flex items-center'>
            <span className='text-gray-600 text-lg'>Cantidad</span>
          </div>
          <div className='flex items-center justify-center pt-4'>
            <FaMinusCircle
              className='text-3xl text-red-600'
              onClick={() => validateQuantity('min')}
            />
            <span className='text-xl text-white bg-gray-400 p-1 rounded mx-4'>
              {quantity}
            </span>
            <FaPlusCircle
              className='text-3xl text-green-600'
              onClick={() => validateQuantity('add')}
            />
          </div>
          <div className='flex justify-evenly mt-4'>
            <button
              className='px-2 py-1 text-indigo-500 rounded-lg border-2 border-indigo-500'
              onClick={() => setIsOpen(false)}
            >
              Cancelar
            </button>
            <button
              className='px-3 py-1 rounded-lg bg-indigo-500 border-2 border-indigo-500 text-white'
              onClick={() => setIsOpen(false)}
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default QuantityPicker
