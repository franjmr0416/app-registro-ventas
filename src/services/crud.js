import { supabase } from './supabaseClient'

const readOneRegister = async (table, id) => {
  const { data, error } = await supabase.from(table).select().eq('id', id)
  return data
}

const readRegisters = async (table) => {
  const { data, error } = await supabase.from(table).select()
  return data
}

const createRegister = async (table, data) => {
  const { error } = await supabase.from(table).insert(data)
  return error
}

const updateRegister = async (table, data, id) => {
  const { error } = await supabase.from(table).update(data).eq('id', id)
  return error
}

const deleteRegister = async (table, id) => {
  const { error } = await supabase.from(table).delete().eq('id', id)
  return error
}

export {
  readOneRegister,
  readRegisters,
  createRegister,
  updateRegister,
  deleteRegister,
}
