import { supabase } from './supabaseClient'

const readRegisters = async (table) => {
  const { data, error } = await supabase.from(table).select()
  return data
}

const createRegister = async (table, data) => {
  const { error } = await supabase.from(table).insert(data)
}

export { readRegisters, createRegister }
