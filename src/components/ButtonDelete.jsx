import { FaTrashAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { deleteRegister } from '../services/crud'

const ButtonDelete = (table, id) => {
  let navigate = useNavigate()

  const deleteAction = () => {
    console.log(table, id)
    deleteRegister(table, id)
    //navigate(-1)
  }
  return (
    <button
      onClick={() => deleteAction()}
      className='flex items-center text-white bg-red-700 hover:bg-red-900 px-4 py-1 rounded-lg'
    >
      <FaTrashAlt className='text-white mr-1' />
      Eliminar
    </button>
  )
}
export default ButtonDelete
