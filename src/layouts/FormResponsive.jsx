import Button from '../components/Button'

const FormResponsive = (props) => {
  const { titulo, textoBoton, children } = props

  return (
    <div className='p-4 flex w-full justify-center'>
      <div className='flex flex-col w-full lg:w-1/4'>
        <h2 className='font-semibold text-xl mb-4'>{titulo}</h2>
        <form>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-1'>
            {children}
          </div>
          <div className='mt-6 flex justify-center'>
            <Button type='submit' text={textoBoton} />
          </div>
        </form>
      </div>
    </div>
  )
}
export default FormResponsive
