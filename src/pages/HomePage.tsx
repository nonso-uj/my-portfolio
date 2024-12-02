import { FiArrowUpRight } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='w-full h-auto'>
      <Navbar />

      <div className='grid grid-cols-4 font-semibold text-xl py-5'>
        <div>&nbsp;</div>
        <div>
          <p>Currently Full-Stack<br />Engineer at Dropp</p>
        </div>
        <div>
          <p>Based in Lagos,<br />Nigeria</p>
        </div>
        <div>&nbsp;</div>
      </div>

      <div className='w-full h-fit flex flex-row items-center justify-center'>
        <div className='w-2/5 h-[90vh] p-10 overflow-hidden'>
          <div className='w-full h-full flex flex-col justify-between items-center gap-y-20 overflow-hidden'>
            <img src="/img/home.jpg" className='w-[24rem] h-auto hover:scale-105 duration-300 object-cover object-center' alt="" />
            <img src="/img/home.jpg" className='opacity-0 w-[24rem] h-auto hover:scale-105 duration-300 object-cover object-center' alt="" />
          </div>
        </div>
        <div className='w-3/5 h-[90vh] p-10 overflow-hidden'>
          <div className='w-full h-full flex flex-col items-center justify-between'>
            <p className='font-semibold text-[7.5rem] leading-[0.85] text-end'>SOFTWARE<br />ENGINEER</p>
            <p className='font-semibold text-[7.5rem] leading-[0.85] text-end'>CHINONSO<br />UDONNE</p>
          </div>
        </div>
      </div>

      <div className='w-full h-auto min-h-screen py-24 space-y-24'>
        <div className='w-full h-fit flex flex-row items-center justify-around'>
          <div>
            <img src="/img/home.jpg" className='w-[24rem] h-auto hover:scale-105 duration-300 object-cover object-center' alt="" />
          </div>
          <div className='w-3/5 p-5 text-4xl font-medium uppercase space-y-10'>
            <p>Passionate about web technologies. I love working at the intersection of creativity and user friendly interfaces. I create memorable web experiences.</p>
            <p>When I'm not building or exploring new web experiences, I'm probably playing games or watching football.</p>
          </div>
        </div>

        <div className='w-full h-fit flex flex-row items-center justify-around'>
          <div className='w-3/5 p-5 text-4xl font-medium uppercase space-y-10'>
            <p>Passionate about web technologies. I love working at the intersection of creativity and user friendly interfaces. I create memorable web experiences.</p>
            <p>When I'm not building or exploring new web experiences, I'm probably playing games or watching football.</p>
          </div>
          <div>
            <Link to={'/about'} className='inline'>
              <button className='h-64 w-64 bg-black text-white rounded-full text-3xl hover:scale-110 duration-300'>More about me</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='w-full px-10'>
        <p className='text-2xl font-bold mb-10 px-10'>RECENT PROJECTS</p>

        <div className='w-full'>
          {[0,1,2,3,4].map(item => (
            <Link key={item} to={'/'} className='inline'>
              <div className='relative h-[80vh] w-full flex flex-row items-start justify-between p-10'>
                <div className='h-full w-1/2'>
                  <div className='sticky top-20 w-full h-fit space-y-10'>
                    <p className='text-[7rem] font-semibold leading-[0.85]'>PROJECT NAME</p>
                    <p className='text-xl font-medium leading-[0.85]'>SHORT DESCRIPTIVE TEXT</p>
                  </div>
                </div>
                <div className='h-full w-1/2 overflow-hidden'>
                  <img src="img/home.jpg" className='w-full h-full object-cover object-center hover:scale-110 duration-300' alt="" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className='w-full p-10 flex flex-row items-center justify-center'>
          <Link to={'/projects'} className='inline'>
            <button className='flex gap-x-3 px-10 py-5 text-lg font-medium bg-black text-white rounded-full hover:scale-110 duration-300'>SEE MORE PROJECTS <FiArrowUpRight size={30} /></button>
          </Link>
        </div>
      </div>

      <div className='w-full h-fit min-h-[80vh] px-20'>
        <p className='text-2xl font-bold mb-10'>SEND ME A MESSAGE ...</p>

        <div className='w-full overflow-hidden'>
          <a href="mailto:nonso.udonne@gmail.com" className='text-[8rem] font-semibold tracking-tighter'>
            <p className='leading-[1.2]'>HELLO@</p>
            <p className='underline decoration-dotted underline-offset-[1rem] decoration-8 leading-[1.2]'>NONSOUDONNE.COM</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage