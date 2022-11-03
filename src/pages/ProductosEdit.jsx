import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormControl from '../components/FormControl'
import Navbar from '../components/Navbar'
import FormResponsive from '../layouts/FormResponsive'
import {
  createRegister,
  readOneRegister,
  updateRegister,
} from '../services/crud'

const ProductosEdit = () => {
  const { id } = useParams()

  const initialProductoState = {
    nombre: '',
    stock: 0,
    precio_venta: 0.0,
    precio_costo: 0.0,
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

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentProducto({ ...currentProducto, [name]: value })
  }

  const showConfirm = (event) => {
    event.preventDefault()
    if (id == 0) {
      console.log(currentProducto)
      createRegister('Productos', currentProducto)
    } else {
      console.log(currentProducto)
      updateRegister('Productos', currentProducto, id)
    }
  }
  return (
    <div>
      <div className='flex flex-col'>
        <Navbar title={'Productos'} id={id} table={'Productos'} />
        <FormResponsive
          onSubmit={showConfirm}
          titulo={'Detalle producto'}
          textoBoton={id == 0 ? 'Registrar' : 'Actualizar'}
        >
          <FormControl
            label={'Nombre'}
            type={'text'}
            required
            placeholder='Nombre'
            name='nombre'
            value={currentProducto.nombre}
            onChange={handleInputChange}
          />
          <FormControl
            label={'Stock'}
            type={'text'}
            placeholder='0'
            name='stock'
            value={currentProducto.stock}
            onChange={handleInputChange}
          />
          <FormControl
            label={'Precio venta'}
            type={'text'}
            required
            placeholder='00.0'
            name='precio_venta'
            value={currentProducto.precio_venta}
            onChange={handleInputChange}
          />
          <FormControl
            label={'Precio costo'}
            type={'text'}
            placeholder='00.0'
            name='precio_costo'
            value={currentProducto.precio_costo}
            onChange={handleInputChange}
          />
          <FormControl
            label={'Descripción'}
            type={'text'}
            placeholder='Descripcion'
            name='descripcion'
            value={currentProducto.descripcion}
            onChange={handleInputChange}
          />
        </FormResponsive>
      </div>
    </div>
  )
}
export default ProductosEdit
