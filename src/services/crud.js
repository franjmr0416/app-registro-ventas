import { supabase } from './supabaseClient'

const createRegister = async (table, data) => {
  const { error } = await supabase.from(table).insert(data)
}

export { createRegister }
