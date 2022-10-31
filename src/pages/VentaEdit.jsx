import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

const VentaEdit = () => {
  const { id } = useParams()

  return <Navbar title={'Detalle'} />
}
export default VentaEdit
