import { motion } from 'framer-motion'
import Alef from "../public/images/alefiya.png"
import Image from 'next/image'

export default function About() {
  const Header = () => {
    return (
      <div style={{ overflow: 'hidden' }}>
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 4.5 }}
          className='bg-zinc-800 w-1/2 ml-auto text-slate-200 h-10 mt-4 text-2xl md:h-16 md:w-1/4 md:mt-6 md:text-3xl px-4'
        >
          <span className='self-center leading-10 md:leading-[64px]'>About Me</span>
        </motion.div>
      </div>
    )
  }

  return (
    <div className='bg-zinc-800 h-min-screen flex justify-center items-center font-cabinet py-10'>
      <div className='bg-slate-200 h-auto w-[90%] py-6'>
        <Header />
        <div className='flex flex-col w-11/12 items-center justify-center gap-12 mx-auto md:flex-row'>
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 5.5 }}
            className='bg-zinc-800 w-[40%] md:w-[98%] mt-6 md:mt-0'>
            <Image src={Alef} className='relative translate-x-4 translate-y-4' />
          </motion.div>
          <div style={{ overflow: 'hidden' }}>
            <motion.ul
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 5.5 }}
              className="flex flex-col gap-4 text-zinc-800 text-xl md:text-3xl text-justify px-8 py-2 md:p-10 md:leading-10">
              <li className="text-center md:text-left text-2xl md:text-3xl"> Hello World, I&apos;m <b>Alefiya!</b> </li>
              <li> An aspiring engineer in <b>Computer Science</b> with a deep passion for <b>Artificial Intelligence and Machine Learning</b>.</li>
              <li>
                Throughout my journey, I have acquired strong expertise in <b>Python, Java, SQL, React, and Next.js</b>, which have been instrumental in my exploration and development of innovative solutions.
                Aside from my technical proficiency, I value <b>collaboration and teamwork</b>.
              </li>
              <li> Explore my portfolio to see my work. Let&apos;s <b>connect and create</b> something extraordinary!</li>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  )
}
