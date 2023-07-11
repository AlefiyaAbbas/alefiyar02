import React from 'react'
import { motion } from 'framer-motion'

export default function Certificate() {
  return (
    <div className="w-full h-auto bg-zinc-800 font-cabinet py-4">
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 7 }}
        className="bg-slate-200 text-zinc-800 h-10 mt-4 text-2xl md:h-16 w-1/2 md:w-1/6 md:mt-6 md:text-4xl px-4"
      >
        <span className="leading-10 md:leading-[64px]">Certifications</span>
      </motion.div>

    </div>
  )
}
