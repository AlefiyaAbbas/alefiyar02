import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const links = ['Home', 'About', 'Experience', 'Contact'];
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    let navbar = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.style.top = '-100px';
      } else {
        navbar.style.top = '0';
      }
      lastScrollTop = scrollTop;
    });
  }, []);

  useEffect(() => {
    let navbar = document.getElementById('nav');
    navbar.style.top = '-100px';
    setTimeout(() => {
      navbar.style.top = '0';
    }, 3000);
  }, []);

  const HorizontalNavList = ({ link }) => {
    return (
      <li className="px-4 cursor-pointer capitalize font-medium  text-slate-200 hover:scale-105 duration-200 hover:text-teal-300">
        {link}
      </li>
    );
  };
  const VerticalNavList = ({ link }) => {
    return (
      <motion.li
        className="px-4 capitalize py-6 text-4xl cursor-pointer hover:text-teal-300"
        variants={{
          open: {
            y: 0,
            opacity: 1,
          },
          closed: {
            y: '45%',
            opacity: 0,
          },
        }}
      >
        {link}
      </motion.li>
    );
  };

  return (
    <nav id="nav" className="fixed w-full duration-200 font-cabinet">
      <div className="flex justify-end items-center w-full h-12 bg-zinc-800 text-slate-200 px-4">
        <ul className="hidden md:flex font-cabinet text-lg p-2">
          {links.map((link, index) => {
            return <HorizontalNavList key={index} link={link} />;
          })}
        </ul>
        <div
          onClick={() => {
            setMobileNav(!mobileNav);
          }}
          className="cursor-pointer md:hidden text-slate-200 pr-4 z-10"
        >
          <motion.button
            initial='hide'
            animate={mobileNav ? 'show' : 'hide'}
            onClick={() => {
              setMobileNav(!mobileNav)
            }}
            className='flex flex-col gap-1 relative z-10 h-8 justify-center items-center'
          >
            <motion.span
              variants={{
                hide: {
                  rotate: 0
                },
                show: {
                  rotate: 45,
                }
              }}
              className='w-6 bg-slate-200 h-[1px]'
            ></motion.span>
            <motion.span
              variants={{
                hide: {
                  rotate: 0
                },
                show: {
                  rotate: -45,
                  y: -5
                }
              }}
              className='w-6 bg-slate-200 h-[1px]'
            ></motion.span>
          </motion.button>
        </div>
        <AnimatePresence>
          {mobileNav && (
            <motion.div
              variants={{
                open: {
                  x: '0%',
                  transition: {
                    when: 'beforeChildren',
                    duration: 0.5,
                  },
                },
                closed: {
                  x: '100%',
                  transition: {
                    when: 'afterChildren',
                    duration: 0.5,
                  },
                },
              }}
              initial="closed"
              animate={mobileNav ? 'open' : 'closed'}
              exit="closed"
              className="flex flex-col justify-center items-center fixed top-0 left-0 w-screen h-full bg-gradient-to-b from-zinc-800 to-zinc-900 opacity-90"
            >
              <ul className="text-center">
                {links.map((link, index) => {
                  return <VerticalNavList key={index} link={link} />;
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
