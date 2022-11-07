import { useEffect, useState } from 'react'
import { readRegisters } from '../services/crud'
import { FaSearch } from 'react-icons/fa'
import QuantityPicker from '../components/QuantityPicker'
import { useNavigate } from 'react-router-dom'

const ListDynamic = (props) => {
  const {
    table,
    placeholder,
    textLabel,
    isCountable,
    selectedItem,
    setSelectedItem,
    quantity,
    setQuantity,
    setOnSelect,
    currentVentaState,
    setCurretVentaState,
    setCurrentCarrito,
    currentCarrito,
  } = props
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const filteredItems =
    query === ''
      ? items
      : items.filter((item) => {
          return item.nombre.toLowerCase().includes(query.toLowerCase())
        })

  const getRows = async () => {
    const result = await readRegisters(table)
    setItems(result)
  }

  useEffect(() => {
    getRows()
  }, [table])

  const eventHandler = (isCliente) => {
    if (isCliente) {
      setCurretVentaState({
        ...currentVentaState,
        fk_cliente: selectedItem.id,
        nombre_cliente: selectedItem.nombre,
      })
    } else {
      setCurrentCarrito((currentCarrito) => [
        ...currentCarrito,
        {
          id: selectedItem.id,
          nombre: selectedItem.nombre,
          precio: selectedItem.precio_venta,
          cantidad: quantity,
        },
      ])
    }
    setOnSelect(false)
  }

  return (
    <div className='flex flex-col px-2 rounded-lg bg-white w-full'>
      <div className='flex items-center justify-between py-2'>
        <label className='text-lg font-semibold'>{textLabel}</label>
      </div>
      <div className='w-full flex items-center shadow p-1 rounded-lg'>
        <input
          type={'text'}
          className={'w-full h-10 border rounded-lg'}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
        />
        <FaSearch className='text-gray-300 text-lg ml-1' />
      </div>

      <div className='flex flex-col'>
        {filteredItems.map((x) => {
          return (
            <div
              className={`p-2 my-2 shadow rounded-lg hover:bg-indigo-300 ${
                x.id == selectedItem
                  ? 'bg-indigo-300 text-white'
                  : 'bg-white text-gray-500'
              }`}
              key={x.id}
              onClick={() => {
                setSelectedItem(x)
                setIsOpen(true)
              }}
            >
              {x.nombre}
            </div>
          )
        })}
      </div>
      {isOpen ? (
        <QuantityPicker
          quantity={quantity}
          setQuantity={setQuantity}
          setIsOpen={setIsOpen}
          eventHandler={eventHandler}
          isCountable={isCountable}
        />
      ) : null}
    </div>
  )
}
export default ListDynamic
