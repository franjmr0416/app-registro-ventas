import PageContainer from '../layouts/PageContainer'

const ListPage = () => {
  return (
    <div className='flex flex-col p-4 justify-center items-center'>
      <p className='text-2xl font-semibold text-indigo-700'>Error 404</p>
      <p className='text-lg'>Lo que sea que estes buscando no esta aquí</p>
      <img
        className='mt-10 max-w-lg'
        alt='error 404'
        src='../../public/error404.svg'
      />
    </div>
  )
}
export default ListPage
