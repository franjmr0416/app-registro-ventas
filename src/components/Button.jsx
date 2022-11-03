const Button = (props) => {
  const { type, text, name, ...rest } = props
  return (
    <button
      className='text-white bg-indigo-700 hover:bg-indigo-900 p-2 w-full md:w-1/4 lg:w-1/2 rounded-lg'
      type={type}
      name={name}
      {...rest}
    >
      {text}
    </button>
  )
}
export default Button
