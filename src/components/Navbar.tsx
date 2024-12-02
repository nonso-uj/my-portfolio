import { ImMenu } from 'react-icons/im'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 w-full h-fit z-50'>
      {/* DESKTOP */}
      <div className='hidden w-full h-fit px-14 py-5 lg:flex flex-row items-center justify-between font-semibold text-xl'>
        <Link to={'/'}>
          <p className=''>Chinonso Udonne</p>
        </Link>

        <div className='flex flex-row items-center justify-end gap-x-5'>
          <Link to={'/about'}>
            <p className=''>About</p>
          </Link>
          <Link to={'/projects'}>
            <p className=''>Work</p>
          </Link>
          <Link to={'/'}>
            <p className=''>Contact</p>
          </Link>
        </div>
      </div>
      
      {/* MOBILE */}
      <div className='lg:hidden w-full h-fit px-10 py-5 flex flex-row items-center justify-between'>
        <Link to={'/'}>
          <p className=''>C &middot; U</p>
        </Link>

        <div className='flex flex-row items-center justify-end'>
          <ImMenu size={30} />
        </div>
      </div>
    </div>
  )
}

export default Navbar