const PageContainer = (props) => {
  return (
    <div className='flex flex-col w-screen lg:w-full justify-between bg-gray-300'>
      {props.children}
    </div>
  )
}
export default PageContainer
