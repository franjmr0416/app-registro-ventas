import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

const ProductosEdit = () => {
  const { id } = useParams()
  return (
    <div>
      <div className='flex flex-col'>
        <Navbar title={'Productos'} id={id} table={'Productos'} />
      </div>
    </div>
  )
}
export default ProductosEdit
