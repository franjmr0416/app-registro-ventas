import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { supabase } from '../services/supabaseClient'

const getVentas = async () => {
  let { data: Ventas, error } = await supabase.from('Ventas').select('*')

  console.log('data: ' + Ventas)
  console.log('error: ' + error)
}

const List = () => {
  const [ventas, setVentas] = useState(null)
  getVentas()
  /*
  useEffect(() => {
    setVentas(getVentas())
  },[ventas])
  */
  return (
    <div className='flex flex-col pt-1'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
export default List
