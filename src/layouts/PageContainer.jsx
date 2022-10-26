const PageContainer = (props) => {
  return (
    <div className='flex flex-col w-screen h-screen bg-gray-300'>
      {props.children}
    </div>
  )
}
export default PageContainer
