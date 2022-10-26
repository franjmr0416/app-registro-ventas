const PageContainer = (props) => {
  return (
    <div className='flex flex-col w-100 h-100 bg-gray-300'>
      {props.children}
    </div>
  )
}
export default PageContainer
