import { useParams } from 'react-router-dom'

const VentaEdit = () => {
  const { id } = useParams()
  return (
    <div>
      <p>Venta edit id: {id}</p>
    </div>
  )
}
export default VentaEdit
