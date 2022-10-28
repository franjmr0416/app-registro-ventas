import PageContainer from '../layouts/PageContainer'
import { useParams } from 'react-router-dom'

const VentaDetalle = () => {
  const { id } = useParams()

  return (
    <PageContainer>
      <div>Venta Detalle id= {id}</div>
    </PageContainer>
  )
}
export default VentaDetalle
