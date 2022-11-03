import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { readOneRegister } from '../services/crud'

const ProductosEdit = () => {
  const { id } = useParams()

  const initialProductoState = {
    nombre: '',
    stock: null,
    precio_venta: null,
    precio_costo: null,
    descripcion: '',
    foto_url: '',
  }

  const [currentProducto, setCurrentProducto] = useState(initialProductoState)

  const getProducto = async (id) => {
    const result = await readOneRegister('Productos', id)
    setCurrentProducto(result)
  }

  useEffect(() => {
    if (id != 0) getProducto(id)
  }, [id])

  return (
    <div>
      <div className='flex flex-col'>
        <Navbar title={'Productos'} id={id} table={'Productos'} />
      </div>
    </div>
  )
}
export default ProductosEdit
