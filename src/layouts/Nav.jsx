import { FaCashRegister, FaBars, FaChartPie } from 'react-icons/fa'

const Nav = () => {
  return (
    <nav className='py-2 px-4 shadow-md bg-white'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <a href='#' className='flex items-center'>
          <FaChartPie className='mr-3 h-6 sm:h-10 text-xl text-indigo-500 drop-shadow-md shadow-indigo-500/50' />
          <span className='self-center font-bold whitespace-nowrap antialiased text-2xl text-indigo-500 drop-shadow-md shadow-indigo-500/50'>
            Intellisales
          </span>
        </a>
        <div>
          <FaBars className='text-xl' />
        </div>
      </div>
    </nav>
  )
}
export default Nav
