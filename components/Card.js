import { motion } from 'framer-motion'
import { BiLinkExternal, BiLogoGithub } from 'react-icons/bi'

import { useState } from 'react';
import Link from 'next/link';

const Card = ({ id, imgUrl, title, textstack, index, active, handleClick, extrnLink, git }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
    handleClick(id);
  };

  const renderBackground = () => {
    if (active === id) {
      return (
        <img src={imgUrl} alt='project' className='absolute w-full h-full object-cover' />
      );
    } else {
      return (
        <div className='absolute w-full h-full bg-slate-200'></div>
      );
    }
  };

  return (
    <motion.div
      className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
        } flex items-center justify-center min-w-[170px] h-[500px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer bg-slate-200 customShadow`}
      onClick={handleCardClick}
    >
      {renderBackground()}
      {active !== id ? (
        <h3 className='font-semibold sm:text-2xl text-xl text-zinc-800 absolute z-1 m-4 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] 
         w-full min-w-full'>
          {title}
        </h3>
      ) : (
        <div className='absolute bottom-0 px-4 py-2 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.8)]'>
          <h2 className='md:my-[24px] font-semibold sm:text-4xl text-3xl text-teal-300 '>
            {title}
          </h2>
          <p className='font-normal text-xl leading-[20.16px] text-slate-300 my-1'>
            {textstack}
          </p>
          <div className={`glassmorphism flex flex-row`}>
            <Link href={git} target='_blank'>
              <BiLogoGithub className='text-4xl object-contain text-slate-200 md:m-2 mx-2' />
            </Link>
            {extrnLink ? (
              <Link href={extrnLink}>
                <BiLinkExternal className='text-4xl object-contain text-slate-200 md:m-2 ' />
              </Link>
            ) : null}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Card;


