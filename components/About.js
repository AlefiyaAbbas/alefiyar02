import { motion } from 'framer-motion'
import styles from '../styles/about.module.css'
import Alef from "../public/images/hero.png"
import Image from 'next/image'
import clsx from 'clsx'


export default function About() {
  const Header = () => {
    return (
      <motion.div
        // initial={{ x: 1000 }}
        // animate={{ x: 0 }}
        // transition={{ duration: 1, delay: 4.5 }}
        className='bg-zinc-800 w-1/2 ml-auto text-slate-200 h-10 mt-4 text-2xl md:h-16 md:w-1/4 md:mt-2 md:text-3xl px-4 relative left-6 '
      >
        <div className='self-center leading-10 md:leading-[64px]  hover:text-teal-500'>About Me</div>
      </motion.div>
    )
  }
  return (
    <div className='bg-zinc-800 h-min-screen flex justify-center items-center font-cabinet py-10'>
      <div className='bg-slate-200 h-auto w-[90%] py-8 customShadow'>
        <Header />
        <section className='max-w-screen-xl mx-auto py-2'>
          <div className='container mx-auto flex md:flex-row-reverse flex-col-reverse items-center'>
            <div className='lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center'>
              <div style={{ overflow: 'hidden' }}>
                <motion.ul
                  // initial={{ x: 1000 }}
                  // animate={{ x: 0 }}
                  // transition={{ duration: 1, delay: 5.5 }}
                  className="flex flex-col gap-4 text-zinc-800 text-xl md:text-3xl text-justify px-10  md:leading-10">
                  <li className="text-center md:text-left font-bold "> Hello World!</li>
                  {/* , I&apos;m <b>Alefiya!</b> </li> */}
                  <li> An aspiring engineer in <b>Computer Science</b> with a deep passion for <b>Artificial Intelligence and Machine Learning</b>.</li>
                  <li>
                    Throughout my journey, I have acquired strong expertise in <b>Python, Java, SQL, React, and Next.js</b>, which have been instrumental in my exploration and development of innovative solutions.
                    Aside from my technical proficiency, I value <b>collaboration and teamwork</b>.
                  </li>
                  <li> Explore my portfolio to see my work. Let&apos;s <b>connect and create</b> something extraordinary!</li>
                </motion.ul>
              </div>
            </div>
            {/* <div className='lg:max-w-md md:w-1/2 w-5/6 flex items-center justify-center py-6'>
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 2, delay: 5.5 }}
              className='border-4 border-teal-400 w-1/3 md:w-2/3 mt-10 mx-8 md:mt-0'>
              <Image className="object-cover relative -translate-x-4 -translate-y-4"  src={Alef} alt="Alef" />
            </motion.div>
          </div> */}
            <div className={styles.cardContainer}>
              <div className={styles.profileDiv}>
              🢄
                <Image className="object-contain" src={Alef} alt="Alef" />
              </div>
              <div className={styles.infoDiv}>
                <div className={styles.nameDiv}>
                  <p className={styles.name}>Alefiya Abbas</p>
                </div>
                <div className={styles.socialDiv}>
                  <a href="https://github.com/AlefiyaAbbas">
                    <svg viewBox="0 0 496 500" className={clsx(styles.socials, styles.github)}>
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/alefiya-rampurawala-30851a204/">
                    <svg viewBox="0 0 448 512" className={clsx(styles.socials, styles.linked)}>
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
                  <a href="mailto:alefiyar02@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="gmail" className={clsx(styles.socials, styles.mail)}>
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <path d="M14.5 2h-13A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm-1.766 1L8 6.738 3.266 3h9.468zM2 13V4.646l6 4.615 6-4.616V13H2z"></path>
                        </g>
                      </g>
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>


  )
}
