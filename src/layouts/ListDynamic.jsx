import { useEffect, useState } from 'react'
import { readRegisters } from '../services/crud'

const ListDynamic = (props) => {
  const { table, placeholder, textLabel } = props
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState(0)
  const [query, setQuery] = useState('')

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

  return (
    <div className='flex flex-col p-2 rounded-lg bg-white w-full'>
      <label>{textLabel}</label>
      <input
        type={'text'}
        className={'border'}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className='flex flex-col'>
        {filteredItems.map((x) => {
          return (
            <div
              className='p-2 my-2 shadow'
              key={x.id}
              onClick={() => setSelectedItem(x.id)}
            >
              {x.nombre}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default ListDynamic
