import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Card from './Card';
import { useState } from 'react';

export default function Project() {
  const projects = [
    {
      id: 'project-1',
      imgUrl: '/images/project.jpg',
      textstack: 'React, NextJS, TailwindCSS, Framer Motion',
      title: 'Plan-It'
    },
    {
      id: 'project-2',
      imgUrl: '/images/ftr.png',
      textstack: 'React, NextJS, TailwindCSS, Framer Motion',
      title: 'Future-Edu'
    },
    {
      id: 'project-3',
      imgUrl: '/images/hand.png',
      textstack: 'React, NextJS, TailwindCSS, Framer Motion',
      title: 'Hand-2-Hand'
    },
    {
      id: 'project-4',
      imgUrl: '/images/project.jpg',
      title: 'Stock Analysis',
      textstack: 'React, NextJS, TailwindCSS, Framer Motion',
    },
    {
      id: 'project-5',
      imgUrl: '/images/project.jpg',
      title: 'Agenda Builder',
      textstack: 'React, NextJS, TailwindCSS, Framer Motion',
    },

  ]

  const [active, setActive] = useState('project-3');

  return (
    <>
      <div className='w-full h-auto bg-zinc-800 font-cabinet py-8 flex flex-col justify-center items-end ' style={{ overflow: 'hidden' }}>
        <motion.div

          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 7 }}
          className="bg-slate-200 text-zinc-800 h-10 mt-4 text-2xl md:h-16 w-1/2 md:w-1/6 md:mt-6 md:text-4xl px-4"
        >
          <span className="leading-10 md:leading-[64px]">Work</span>
        </motion.div>

        <div className='md:mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 w-full p-8'>
          {projects.map((world, index) => (
            <Card
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </div>
    </>
  );
}

