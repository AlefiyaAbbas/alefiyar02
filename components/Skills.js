import React from 'react';
import { motion } from 'framer-motion';
import { TbHexagonLetterC, TbBrandJavascript, TbBrandHtml5 } from 'react-icons/tb';
import { DiMysql, DiPython, DiJava} from 'react-icons/di';
import {SiNextdotjs, SiReact, SiNodedotjs, SiAndroid, SiMongodb,SiTailwindcss} from 'react-icons/si';

export default function Skills() {
  const languages = [
    { name: 'Python', progressBar: 80, icon: <DiPython /> },
    { name: 'C Programming', progressBar: 85, icon: <TbHexagonLetterC /> },
    { name: 'Java', progressBar: 75, icon: <DiJava /> },
    { name: 'SQL', progressBar: 80, icon: <DiMysql /> },
    { name: 'JavaScript', progressBar: 75, icon: <TbBrandJavascript /> },
    { name: 'HTML/CSS', progressBar: 90, icon: <TbBrandHtml5 /> },
  ];

  const frameworks = [
    { name: 'React', progressBar: 80, icon: <SiReact /> },
    { name: 'Next.js', progressBar: 85, icon: <SiNextdotjs />},
    { name: 'Node.js', progressBar: 80, icon: <SiNodedotjs /> },
    { name: 'Android Studio', progressBar: 75, icon: <SiAndroid/>  },
    { name: 'MongoDB', progressBar: 75, icon: <SiMongodb/>},
    { name: 'TailwindCSS', progressBar: 90 , icon: <SiTailwindcss/>},
  ];
  return (
    <>
      <div className="w-full h-auto bg-zinc-800 font-cabinet py-4">
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 7 }}
          className="bg-slate-200 text-zinc-800 h-10 mt-4 text-2xl md:h-16 w-1/2 md:w-1/6 md:mt-6 md:text-4xl px-4 "
        >
          <span className="leading-10 md:leading-[64px]">Skill-Set</span>
        </motion.div>
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 8 }}
          className="flex flex-col justify-evenly items-center md:items-stretch md:flex-row py-10 gap-y-10 text-center text-xl md:text-3xl"
        >
          <div className="bg-slate-200 w-[80%] md:w-[40%] p-4 flex flex-col items-center">
            Languages
            <div className="grid grid-cols-2 py-6 gap-10">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className='w-28 h-28 md:w-48 md:h-48 bg-slate-200 border-2 border-zinc-800 relative text-base md:text-2xl text-slate-200 hover:bg-zinc-800'
                >
                  <div className="flex justify-center text-zinc-800  text-7xl md:text-[140px] m-2 hover:text-slate-200">
                    {language.icon}
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 ">
                    {language.name}
                  </div>
                  <div className="w-full bg-slate-200 h-2 absolute bottom-0 border-t-2 border-zinc-800 overflow-hidden">
                    <motion.div
                      initial={{ x: -1000 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 5, delay: 5 }}
                      className="h-2 bg-teal-400 "
                      style={{ width: language.progressBar ? `${language.progressBar}%` : '0%' }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-200 w-[80%] md:w-[40%] p-4 flex flex-col items-center">
            Framework & Others
            <div className="grid grid-cols-2 py-6 gap-10">
              {frameworks.map((framework, index) => (
                <div
                  key={index}
                  className='w-28 h-28 md:w-48 md:h-48 bg-slate-200 border-2 border-zinc-800 relative text-base md:text-2xl text-slate-200 hover:bg-zinc-800'
                >
                  <div className="flex justify-center text-zinc-800  text-[58px] md:text-[120px] m-4  hover:text-slate-200 ">
                    {framework.icon}
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 ">
                    {framework.name}
                  </div>
                  <div
                    className="w-full bg-slate-200 h-2 absolute bottom-0 border-t-2 border-zinc-800 overflow-hidden">
                    <motion.div
                      initial={{ x: -1000 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 5, delay: 6 }}
                      className="h-2 bg-teal-400"
                      style={{ width: framework.progressBar ? `${framework.progressBar}%` : '0%' }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div >
      </div >
    </>
  );
}
