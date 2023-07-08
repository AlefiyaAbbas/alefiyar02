import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/skills.module.css';
import clsx from 'clsx';
import { TbHexagonLetterC, TbBrandJavascript, TbBrandHtml5 } from 'react-icons/tb';
import { DiMysql, DiPython, DiJava } from 'react-icons/di';
import { SiNextdotjs, SiReact, SiNodedotjs, SiAndroid, SiMongodb, SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  const languages = [
    { name: 'Python', icon: <DiPython className={clsx(styles.img)} />, star: '★★★✰✰' },
    { name: 'C', icon: <TbHexagonLetterC className={clsx(styles.img)} />, star: '★★★★✰' },
    { name: 'Java', icon: <DiJava className={clsx(styles.img)} />, star: '★★★★✰' },
    { name: 'SQL', icon: <DiMysql className={clsx(styles.img)} />, star: '★★★★✰' },
    { name: 'JavaScript', icon: <TbBrandJavascript className={clsx(styles.img)} />, star: '★★★✰✰' },
  ];

  const frameworks = [
    { name: 'React', icon: <SiReact className={clsx(styles.img)} />, star: '★★★★✰' },
    { name: 'Next.js', icon: <SiNextdotjs className={clsx(styles.img)} />, star: '★★★✰✰' },
    { name: 'Node.js', icon: <SiNodedotjs className={clsx(styles.img)} />, star: '★★★★✰' },
    { name: 'MongoDB', icon: <SiMongodb className={clsx(styles.img)} />, star: '★★★★✰' },
    { name: 'TailwindCSS', icon: <SiTailwindcss className={clsx(styles.img)} />, star: '★★★★✰' },
  ];
  console.log(styles)
  return (
    <>
      <div className="w-full h-auto bg-zinc-800 font-cabinet py-4">
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 7 }}
          className="bg-slate-200 text-zinc-800 h-10 mt-4 text-2xl md:h-16 w-1/2 md:w-1/6 md:mt-6 md:text-4xl px-4"
        >
          <span className="leading-10 md:leading-[64px]">Skill-Set</span>
        </motion.div>
        <motion.div
          // initial={{ y: 1000 }}
          // animate={{ y: 0 }}
          // transition={{ duration: 1, delay: 8 }}
          className="flex flex-col justify-evenly items-center md:items-stretch md:flex-row py-10 gap-y-6 text-center text-xl md:text-4xl"
        >
          <div className="bg-slate-200 w-[80%] md:w-[40%] p-4 items-center justify-around customShadow">
            Languages
            <motion.div
              // initial={{ y: 1000 }}
              // animate={{ y: 0 }}
              // transition={{ duration: 1, delay: 9 }}
              className="flex flex-wrap flex-row items-center justify-around p-4">
              {languages.map(({ name, icon, star }, index) => {
                return (
                  <div className={styles.card}>
                    {icon}
                    <div className={styles.textBox}>
                      <p className={styles.texthead}>{name}</p>
                      <span> {star}</span>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          <div className="bg-slate-200 w-[80%] md:w-[40%] p-4 items-center justify-around customShadow">
            Frameworks & Others
            <motion.div
              // initial={{ y: 1000 }}
              // animate={{ y: 0 }}
              // transition={{ duration: 1, delay: 9 }}
              className="flex flex-wrap flex-row items-center justify-around p-4">
              {frameworks.map(({ name, icon, star }, index) => {
                return (
                  <div className={styles.card}>
                    {icon}
                    <div className={styles.textBox}>
                      <p className={styles.texthead}>{name}</p>
                      <span> {star}</span>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </motion.div >
      </div >
    </>
  );
}
