import { useEffect, useState } from 'react'
import { readRegisters } from '../services/crud'
import { FaSearch } from 'react-icons/fa'
import QuantityPicker from '../components/QuantityPicker'

const ListDynamic = (props) => {
  const { table, placeholder, textLabel, isCountable } = props
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState(0)
  const [query, setQuery] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [isOpen, setIsOpen] = useState(false)

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

  const eventHandler = (id) => {
    setSelectedItem(id)
    setIsOpen(true)
  }

  return (
    <div className='flex flex-col p-2 rounded-lg bg-white w-full'>
      <label className='py-2 text-lg font-semibold'>{textLabel}</label>
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
              onClick={() => eventHandler(x.id)}
            >
              {x.nombre}
            </div>
          )
        })}
      </div>
      {isOpen && isCountable ? (
        <QuantityPicker
          quantity={quantity}
          setQuantity={setQuantity}
          setIsOpen={setIsOpen}
        />
      ) : null}
    </div>
  )
}
export default ListDynamic
