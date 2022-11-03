const FormControl = (props) => {
  const { label, type, ...rest } = props

  return (
    <div>
      <label className='block mb-2 text-sm font-medium text-gray-900'>
        {label}
      </label>
      <input
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        type={type}
        {...rest}
      />
    </div>
  )
}
export default FormControl
