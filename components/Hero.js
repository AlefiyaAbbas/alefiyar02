import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <>
      <div className="w-full h-screen flex flex-row items-center bg-zinc-800 font-cabinet">
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className='bg-[url("/images/hero.png")] h-5/6 w-10/12 my-4'
        >
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className='flex flex-col justify-center bg-zinc-800 w-9/12 h-5/6 bg-opacity-95 my-12 px-10'
          >
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className='text-6xl md:text-9xl text-slate-200'
            >
              Alefiya Abbas.
            </motion.div>
            <motion.ul
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className='flex flex-col gap-4 text-2xl md:text-4xl text-slate-200 py-12'
            >
              <motion.li> CS Engineer </motion.li>
              <motion.li> Software Developer </motion.li>
              <motion.li> AI & ML Enthusiastic </motion.li>
            </motion.ul>
            <motion.button
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className='border-2 border-solid border-slate-200 text-slate-200 p-4 w-40 text-xl hover:bg-slate-300 hover:text-zinc-800 duration-200'
            >
              Let&apos;s Connect!
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}



