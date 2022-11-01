import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Options = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex flex-col'>
        <Link to={'clientes'}>
          <div className='shadow'>Clientes</div>
        </Link>
      </div>
    </div>
  )
}
export default Options
