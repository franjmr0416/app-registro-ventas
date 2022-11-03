import { useParams } from 'react-router-dom'

const ProductosEdit = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>productos edit id: {id}</h1>
    </div>
  )
}
export default ProductosEdit
