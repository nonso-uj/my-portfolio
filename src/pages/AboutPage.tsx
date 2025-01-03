import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { MdArrowOutward } from 'react-icons/md'
import { useEffect } from 'react'
import { uuidGen } from '../utils'

const experience = [
  {
    startDate: 'NOV 2024',
    endDate: 'Present',
    position: 'Software Engineer (Full-Stack)',
    company: 'Dropp',
    description: 'As a Full-Stack Software Engineer at Dropp, I collaborate closely with the engineering team to build and maintain scalable applications. I develop backend features using Node.js, Express, MongoDB, and Mongoose, while leveraging React and Redux on the frontend to deliver seamless, responsive user interfaces. I actively contribute to product development by implementing key features and optimizing performance, ensuring the platform meets both user and business needs.',
    skills: ['node.js', 'mongoDB', 'javascript', 'mongoose', 'express', 'react', 'redux'],
  },
  {
    startDate: 'AUG 2023',
    endDate: 'NOV 2024',
    position: 'Software Engineer Intern (Full-Stack)',
    company: 'Dropp',
    description: 'I worked as part of the engineering team, contributing to both backend and frontend development. On the backend, I used Node.js, Express, MongoDB, and Mongoose to implement various features, while on the frontend, I worked with React and Redux to enhance user experience and collaborate with the product team on feature development.',
    skills: ['node.js', 'mongoDB', 'javascript', 'mongoose', 'express', 'react', 'redux'],
  },
  {
    startDate: '2022',
    endDate: 'AUG 2023',
    position: 'Full-stack engineer',
    company: '29mediagroup',
    description: 'Worked as a Full-Stack Developer at 29mediagroup, managing backend development with WordPress and creating responsive frontends for various websites. Provided hosting support and handled diverse IT tasks to ensure seamless operations.',
    skills: ['wordpress', 'php', 'javascript', 'css', 'html', 'cPanel', 'DNS management'],
  },
  {
    startDate: '2022',
    endDate: 'JUNE 2023',
    position: 'Full-stack developer',
    company: 'TAG Energy Limited',
    description: 'Developed and maintained backend systems using Laravel and crafted responsive frontends for various websites. Provided hosting support and general IT assistance to ensure seamless operations.',
    skills: ['laravel', 'php', 'javascript', 'css', 'html', 'cPanel', 'DNS management'],
  },
]

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='w-full bg-black overflow-y-auto [&::-webkit-scrollbar]:w-4 [&::-webkit-scrollbar-track]:rounded-0 [&::-webkit-scrollbar-track]:bg-gray-100/10 [&::-webkit-scrollbar-thumb]:rounded-0 [&::-webkit-scrollbar-thumb]:bg-neutral-700/80'>
      <Navbar />
      <div className='w-full h-full'>
        <div className='w-full lg:w-4/5 mx-auto px-4 lg:px-0 py-28 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-y-10'>
          <div className='lg:fixed lg:top-0 lg:bottom-0 lg:left-0 w-full lg:w-1/2 h-full flex flex-col justify-center items-center'>
            <div className='w-full lg:w-3/5 h-auto lg:h-1/2 flex flex-col justify-between items-start lg:gap-y-10 lg:pt-16'>
              <div className='space-y-4'>
                <p className='text-3xl lg:text-5xl text-white/80 font-bold font_bold'>Chinonso Udonne</p>
                <p className='text-lg lg:text-xl text-white/80 font-semibold font_bold'>Software Engineer</p>
                <p className='text-sm lg:text-base text-white/60 font_regular'>I create accessible, visually refined digital experiences for the web.</p>
              </div>

              {/* <div className='hidden lg:block space-y-5 font_regular'>
                <a href={'#about'} className='flex flex-row items-center justify-start gap-x-5'>
                  <div className='bg-white w-20 h-[1px]'>&nbsp;</div>
                  <p className='text-white font-semibold text-sm'>ABOUT</p>
                </a>
                
                <a href={'#history'} className='flex flex-row items-center justify-start gap-x-5'>
                  <div className='bg-[#C7C7C7] w-10 h-[1px]'>&nbsp;</div>
                  <p className='text-secondary font-semibold text-sm'>EXPERIENCE</p>
                </a>
              </div> */}

              <div className='w-full py-10 flex flex-row items-center justify-start gap-x-2 lg:gap-x-5'>
                <Link to={'mailto:nonso.udonne@gmail.com'} className='inline w-fit h-fit p-3 rounded-full icon-outer duration-500'>
                  <IoMdMail size={25} className='icon-inner duration-500' />
                </Link>
                <Link to={'https://www.linkedin.com/in/nonso-uj/'} target='_blank' className='inline w-fit h-fit p-3 rounded-full icon-outer duration-500'>
                  <FaLinkedinIn size={25} className='icon-inner duration-500' />
                </Link>
                <Link to={'https://github.com/nonso-uj'} target='_blank' className='inline w-fit h-fit p-3 rounded-full icon-outer duration-500'>
                  <FaGithub size={25} className='icon-inner duration-500' />
                </Link>
                <Link to={'https://x.com/nonso_uj'} target='_blank' className='inline w-fit h-fit p-3 rounded-full icon-outer duration-500'>
                  <FaXTwitter size={25} className='icon-inner duration-500' />
                </Link>
                <Link to={'https://www.instagram.com/nonso_uj/'} target='_blank' className='inline w-fit h-fit p-3 rounded-full icon-outer duration-500'>
                  <FaInstagram size={25} className='icon-inner duration-500' />
                </Link>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-1/2 h-full flex flex-col items-start justify-start gap-y-20'>
            <div id='about' className='w-full space-y-6 lg:space-y-10 text-base lg:text-lg font_regular text-secondary'>
              <p>I’m a full-stack engineer passionate about building scalable, efficient, and user-centered applications. With a strong foundation in JavaScript, Python, Django, React, Node.js, AWS, and more, I craft solutions that are not only robust but also intuitive to use. Problem-solving is at the core of my work, and I thrive on tackling complex challenges to create impactful software.</p>

              <p>Currently, I’m a Full-Stack Engineer at Dropp, where I’ve had the opportunity to implement key features, optimize performance, and reduce downtime occurrences—all while collaborating with a team that values innovation and user-first design. I'm also diving into DevOps practices and strengthening my knowledge of data structures and algorithms to enhance my technical expertise.</p>

              <p>My journey into software engineering started with a love for math and a curiosity for solving problems. After purchasing my first programming course, I was hooked, and that passion has driven me to constantly learn and improve. Whether it’s exploring new technologies, collaborating with others, or delivering polished features, I’m always eager to push boundaries and find creative solutions.</p>

              <p>Outside of coding, I find joy in football, movies, and music, which provide a refreshing balance to the demands of engineering. My ultimate goal is to become a highly capable engineer and eventually transition into data science, where I can further apply my problem-solving skills to analyze and interpret complex datasets.</p>

              <p>I’m an advocate for collaboration, thoughtful design, and innovation. I believe that great software is the result of a well-rounded approach that blends technical excellence with a deep understanding of user needs.</p>

              <p>In my spare time, you’ll often find me playing football, listening to music, or enjoying a good movie. When I’m not solving technical puzzles, I’m likely exploring ways to improve my craft and expand my horizons in the ever-evolving tech landscape.</p>
            </div>

            <div id='history' className='w-full divide-y lg:divide-none divide-white/50 border-t lg:border-none border-white/50'>
              {experience.map((item) => (
                <div key={uuidGen()} className='w-full flex flex-col lg:flex-row items-stretch justify-stretch gap-x-0 lg:gap-x-10 py-16 lg:p-5 font_regular'>
                  <div className='w-fit'>
                    <div className='w-fit lg:w-32 min-h-8 lg:max-w-32'>
                      <p className='text-secondary text-xs font-semibold inline-block align-baseline lg:leading-normal'>{item.startDate} &mdash; {item.endDate}</p>
                    </div>
                  </div>
                  <div className='space-y-5'>
                    <p className='text-white/90 text-lg'>{item.position} at {item.company}</p>

                    <p className='text-secondary text-sm'>{item.description}</p>

                    <div className='w-full flex flex-row items-center justify-start gap-x-3 gap-y-3 flex-wrap'>
                      {item.skills.map((skill) => (
                        <span key={uuidGen()} className='w-fit h-fit py-1 px-3 rounded-full icon-outer duration-500 cursor-default'>
                          <p className='icon-inner duration-500 text-xs lg:text-sm font-medium'>{skill}</p>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <Link to={'/pdf/Udonne_Chinonso_Backend_Developer_Resume.pdf'} target="_blank" className='mt-20 lg:mt-8 block !border-none'>
                <p className='flex flex-row items-center justify-center lg:justify-start gap-x-3 pl-0 lg:pl-40 font-semibold text-special hover:text-neutral-300/60 font_regular underline decoration-dotted hover:no-underline decoration-[#D3E97A] underline-offset-[6px]'>View Full Résumé <MdArrowOutward size={18} /></p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage